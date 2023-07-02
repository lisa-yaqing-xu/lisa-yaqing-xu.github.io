import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces/gallery.interface';
import { IOverlay } from 'src/app/interfaces/overlay.interface';
import { OverlayHandler, OverlayHandlerService } from 'src/app/services/overlay-handler.service';

@Component({
  selector: 'app-gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  styleUrls: ['./gallery-overlay.component.scss'],
})
export class GalleryOverlayComponent implements OnInit, OnDestroy, OnChanges {
  @Input() currentItem: IGalleryItem;
  @Input() hasPrevious = false;
  @Input() hasNext = false;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  @HostBinding('class.lx-gallery-overlay') baseClass = true;
  @HostListener('document:keydown.escape') escape() {
    this.close.emit();
  }

  @HostListener('document:keydown.arrowleft') goPrev() {
    if (this.hasPrevious) {
      this.prev.emit();
    }
  }

  @HostListener('document:keydown.arrowright') goNext() {
    if (this.hasNext) {
      this.next.emit();
    }
  }

  private overlayData: OverlayHandler;

  constructor(private element: ElementRef, private overlay: OverlayHandlerService) { }

  ngOnInit(): void {
    this.overlayData = this.overlay.setup({
      baseElement: this.element,
      focusTrapElements: [this.element]
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
}
