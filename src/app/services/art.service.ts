import { Injectable } from '@angular/core';
import { LXGallery } from '../config/art.config';
import { IExpandedGalleryData, IGallery, IGalleryItem, IGalleryMainItem, IGalleryMap } from '../interfaces/gallery.interface';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private _galleryMap: IGalleryMap;
  private _gallery: IGallery[];
  public get gallery() {
    return this._gallery;
  }
  public get galleryMap() {
    return this._galleryMap;
  }

  constructor() {}

  public loadArt(){
    this._gallery = window.structuredClone(LXGallery);
    this._galleryMap = this.convertToGalleryMap(this.gallery);
  }

  private convertToGalleryMap(gallery: IGallery[]): IGalleryMap {
    return gallery.reduce((mappedItems, section, sectionIndex) => {
      section.items.forEach((item, itemIndex) => {
        const galleryItem: IExpandedGalleryData = mappedItems[item.name] || { mainItems: [] };
        if (item.collectionConfig) {
          galleryItem .data = { title: item.collectionConfig.title, description: item.collectionConfig.description };
          galleryItem.subItems = item.collectionConfig.additionalItems;
          if(galleryItem.subItems){
            for (let subItem of galleryItem.subItems) {
              this.loadImage(subItem);
            }
          }
          
        }
        else if (!galleryItem.data) {
          galleryItem.data = { title: item.title, description: item.description };
        }
        this.loadImage(item);
        item.index = {
          section: sectionIndex,
          sectionSelf: itemIndex, 
          collection: galleryItem.mainItems.length
        };
        galleryItem.mainItems.push(item);
        mappedItems[item.name] = galleryItem;
      });
      return mappedItems;
    }, {});
  }

  private loadImage(container: IGalleryItem) {
    container.image = new Image();
    container.image.src = container.url;
  }
}
