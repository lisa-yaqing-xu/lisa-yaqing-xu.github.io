import { Component, HostBinding, Input, Output, EventEmitter, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IGalleryItem, IGallerySelection } from '../../interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @HostBinding('class.lx-gallery') baseClass = true;
  @Input() galleryItems: IGalleryItem[] = [];
  @Output() select = new EventEmitter<IGallerySelection>();
  @ViewChildren('quickViews') quickViews: QueryList<ElementRef>;

  onSelect(item: IGalleryItem, index: number, event: Event) {
    event.preventDefault();
    this.select.emit({ item, index });
  }
}
