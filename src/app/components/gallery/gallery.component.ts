import { Component, HostBinding, Input, Output, EventEmitter, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IGalleryMainItem, IGallerySelection } from '../../interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @HostBinding('class.lx-gallery') baseClass = true;
  @Input() galleryItems: IGalleryMainItem[] = [];
  @Input() overrideRouteOnClick = false;
  @Output() select = new EventEmitter<IGallerySelection>();
  @ViewChildren('link') link: QueryList<ElementRef>;

  onSelect(item: IGalleryMainItem, index: number, event: Event) {
    if(this.overrideRouteOnClick){
      event.preventDefault();
      event.stopPropagation();
    }
    this.select.emit({ item, index });
  }
}
