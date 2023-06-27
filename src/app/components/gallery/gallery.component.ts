import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { IGalleryItem, IGallerySelection } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @HostBinding('class.lx-gallery') baseClass = true;
  @Input() galleryItems: IGalleryItem[] = [];
  @Output() select = new EventEmitter<IGallerySelection>();

  onSelect(item: IGalleryItem, index: number) {
    this.select.emit({ item, index });
  }
}
