import { Component, HostBinding, Input } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @HostBinding('class.lx-gallery') baseClass = true;
  @Input() galleryItems: IGalleryItem[] = [];
  @Input() set currentIndex(index: number | undefined){
    if(index == null){
      this.currentItem = undefined;
    } else {
      this.currentItem = this.galleryItems[index];
      this.hasPrevious = index > 0;
      this.hasNext = index < this.galleryItems.length - 1;
    }
    this._currentIndex = index;
  };
  get currentIndex(){
    return this._currentIndex;
  }
  currentItem?: IGalleryItem;
  hasPrevious = false;
  hasNext = false;

  private _currentIndex?: number;
}
