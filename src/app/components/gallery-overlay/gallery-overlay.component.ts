import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostBinding,
  HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { IGalleryMainItem } from '../../interfaces/gallery.interface';
import { OverlayHandler, OverlayHandlerService } from '../../services/overlay-handler.service';

@Component({
  selector: 'app-gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  styleUrls: ['./gallery-overlay.component.scss'],
})
export class GalleryOverlayComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() currentItem: IGalleryMainItem;
  @Input() hasPrevious = false;
  @Input() hasNext = false;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();


  @ViewChild('defaultFocus') defaultFocusElement: ElementRef;
  @HostBinding('class.lx-gallery-overlay') baseClass = true;
  @HostListener('document:keydown.escape') escape() {
    this.close.emit();
  }

  @HostListener('document:keydown.arrowleft')
  @HostListener('swiperight')
  goPrev()
   {
    if (this.hasPrevious) {
      this.onGoPrevious();
    }
  }

  @HostListener('document:keydown.arrowright') 
  @HostListener('swipeleft')
  goNext() {
    if (this.hasNext) {
      this.onGoNext();
    }
  }

  private overlayData: OverlayHandler;

  constructor(private element: ElementRef, private overlay: OverlayHandlerService) { }

  ngAfterViewInit(): void {
    this.overlayData = this.overlay.setup({
      baseElement: this.element,
      focusTrapElements: [this.element],
      focusElement: this.defaultFocusElement.nativeElement
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hasPrevious'] || changes['hasNext']) {
      setTimeout(() => { this.overlayData?.updateFocusableElements(); }, 0);
    }
  }

  ngOnDestroy(): void {
    this.overlayData.teardown();
  }

  onGoPrevious(){
    this.prev.emit();
    this.defaultFocusElement.nativeElement.focus();
  }

  onGoNext(){
    this.next.emit();
    this.defaultFocusElement.nativeElement.focus();
  }
}
