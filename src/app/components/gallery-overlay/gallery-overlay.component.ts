import { Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  styleUrls: ['./gallery-overlay.component.scss']
})
export class GalleryOverlayComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    document.body.classList.add('overlay-visible');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('overlay-visible');
  }
}
