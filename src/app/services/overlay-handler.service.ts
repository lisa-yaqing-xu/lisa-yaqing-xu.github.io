import { ElementRef, Injectable } from '@angular/core';
import { IOverlay, IOverlayInitData } from '../interfaces/overlay.interface';
@Injectable({
  providedIn: 'root'
})
export class OverlayHandlerService {
  constructor() { }

  setup(data: IOverlayInitData): OverlayHandler {
    const overlayHandler = new OverlayHandler(data);
    return overlayHandler;
  }
}


export class OverlayHandler {
  // https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
  // this is a watered down version of the string since this is a personal site and I'm not out here
  // writing forms here, so it really just boils down to buttons, links, and tabindex.
  readonly focusableElementString = `a[href], button:not([disabled]), [tabindex='0']`;
  private focusableElements: HTMLElement[];
  private focusableElementSet: Set<HTMLElement>;
  private eventCache: { tabEvent?: () => void } = { tabEvent: null };
  private baseElement: ElementRef;
  private focusTrapParents: ElementRef[];
  private defaultFocusElement: HTMLElement;

  constructor(private data: IOverlayInitData) {
    this.baseElement = data.baseElement;
    this.focusTrapParents = data.focusTrapElements;
    this.init();
  }



  init() {
    document.body.classList.add('overlay-visible');
    this.setFocusableElements();
    const tentativeDefault = this.getTentativeDefaultFocusElement();
    this.setDefaultFocusElement(tentativeDefault);
    this.defaultFocusElement.focus();
    this.eventCache.tabEvent = this.onTab.bind(this);
    this.baseElement.nativeElement.addEventListener('keydown', this.eventCache.tabEvent);
  }

  updateFocusableElements() {
    this.setFocusableElements();
    this.setDefaultFocusElement(this.defaultFocusElement);
    if (!this.hasLastFocusElement()) {
      this.defaultFocusElement.focus();
    }
  }

  onTab(event: KeyboardEvent) {
    if (event.key !== 'Tab') {
      return;
    }
    let updateFocusElement;
    if (!this.focusableElements.length) {
      updateFocusElement = this.defaultFocusElement;
    } else if (this.hasLastFocusElement()) {
      const first = this.focusableElements[0];
      const last = this.focusableElements[this.focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        updateFocusElement = last;
      } else if (!event.shiftKey && document.activeElement === last) {
        updateFocusElement = first;
      }
    }
    if (updateFocusElement) {
      event.preventDefault();
      setTimeout(()=>{
        updateFocusElement.focus();
      },0);
    }
  }

  teardown() {
    document.body.classList.remove('overlay-visible');
    this.baseElement.nativeElement.removeEventListener('keydown', this.eventCache.tabEvent);
  }

  private getTentativeDefaultFocusElement() {
    let defaultFocusElement;
    if (this.data.focusElement) {
      defaultFocusElement = this.data.focusElement;
    } else if (this.data.focusElementSelector) {
      defaultFocusElement = this.data.baseElement.nativeElement.querySelector(this.data.focusElementSelector)
        || this.baseElement.nativeElement;
    } else {
      defaultFocusElement = this.baseElement.nativeElement;
    }
    return defaultFocusElement;
  }

  private setFocusableElements() {
    this.focusableElements = this.focusTrapParents.reduce((total, element) => {
      if (element.nativeElement.matches(this.focusableElementString)) {
        total.push(element.nativeElement); // count in focusable self
      }
      const focusableChildren = Array.from(element.nativeElement.querySelectorAll(this.focusableElementString));
      return total.concat(focusableChildren);
    }, []);
    this.focusableElementSet = new Set(this.focusableElements);
  }

  private setDefaultFocusElement(tentativeDefault: HTMLElement) {
    if (tentativeDefault.matches(this.focusableElementString)) {
      this.defaultFocusElement = tentativeDefault;
    } else if (this.focusableElements.length) {
      this.defaultFocusElement = this.focusableElements[0]
    } else {
      throw new Error('no focusable elements within this modal!');
    }
  }

  private hasLastFocusElement() {
    return this.focusableElementSet.has(document.activeElement as HTMLElement);
  }
}
