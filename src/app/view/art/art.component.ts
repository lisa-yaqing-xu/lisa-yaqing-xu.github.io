import { Component, QueryList, ViewChildren } from '@angular/core';
import { IExpandedGalleryData, IGallery, IGalleryMainItem, IGalleryMap, IGallerySelection } from '../../interfaces/gallery.interface';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { ArtService } from 'src/app/services/art.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Params, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/routes.config';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent {
  @ViewChildren('galleries') galleries: QueryList<GalleryComponent>;
  // this is for displaying individual pieces 
  art: IGallery[];
  private artMap: IGalleryMap;
  private recalculate = true;

  currentItem?: IGalleryMainItem;
  currentSection: number = -1;
  currentIndex: number = -1;
  next: { index: number, section: number };
  prev: { index: number, section: number };

  constructor(private artService: ArtService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.art = artService.gallery;
    this.artMap = artService.galleryMap;
    const params = this.activatedRoute.queryParamMap.subscribe((params) => {
      this.setFromParams(params);
    });
  }

  setFromParams(params: ParamMap) {
    const title = params.get('title');
    const indexParam = params.get('index');
    let index: number;
    if (indexParam == null) {
      index = 0;
    } else {
      index = parseInt(indexParam);
    }
    const piece = title ? this.artMap[title] : null;
    if (!piece || isNaN(index)) {
      this.router.navigate([RouteConfig.art.path], {
        replaceUrl: false
      });
    } else {
      const selectedPiece: IGalleryMainItem = piece.mainItems[index];
      if (this.recalculate) {
        this.selectFromIndex(selectedPiece.index.section, selectedPiece.index.sectionSelf);
      }
    }
  }

  select(sectionIndex: number, selection: IGallerySelection) {
    this.setRoute(sectionIndex, selection.index);
  }

  setRoute(sectionIndex: number, itemIndex: number, recalculate = true) {
    this.recalculate = recalculate;
    const item = this.getItemFromArray(sectionIndex, itemIndex);
    const queryParams = { title: item.name, index: undefined };
    if (item.index.collection) {
      queryParams.index = item.index.collection;
    }
    this.router.navigate([RouteConfig.art.path], {
      queryParams,
      replaceUrl: false
    });
  }

  selectFromIndex(sectionIndex: number, itemIndex: number) {
    this.currentSection = sectionIndex;
    this.currentIndex = itemIndex;
    this.setCurrentItem();
    this.prev = this.calcPrev();
    this.next = this.calcNext();
  }

  getItemFromArray(section: number, index: number) {
    return this.art[section].items[index];
  }

  setCurrentItem() {
    this.currentItem = this.getItemFromArray(this.currentSection, this.currentIndex);
  }

  calcPrev() {
    let index = this.currentIndex;
    let section = this.currentSection;
    index--;
    while (index < 0 && section > 0) {
      section--;
      index = this.art[section].items.length - 1;
    }
    if (index < 0) {
      return null;
    }
    return { section, index };
  }

  calcNext() {
    let index = this.currentIndex;
    let section = this.currentSection;
    index++;
    while (index > this.art[section].items.length - 1 && section < this.art.length - 1) {
      section++;
      index = 0;
    }
    if (index > this.art[section].items.length - 1) {
      return null;
    }
    return { section, index };
  }

  goPrev() {
    this.next = { section: this.currentSection, index: this.currentIndex };
    this.currentIndex = this.prev.index;
    this.currentSection = this.prev.section;
    this.prev = this.calcPrev();
    this.setCurrentItem();
    this.setRoute(this.currentSection, this.currentIndex, false);
  }

  goNext() {
    this.prev = { section: this.currentSection, index: this.currentIndex };
    this.currentIndex = this.next.index;
    this.currentSection = this.next.section;
    this.next = this.calcNext();
    this.setCurrentItem();
    this.setRoute(this.currentSection, this.currentIndex, false);
  }

  closeOverlay() {
    this.galleries.get(this.currentSection).link.get(this.currentIndex).nativeElement.focus();
    this.prev = null;
    this.next = null;
    this.currentIndex = -1;
    this.currentSection = -1;
    this.currentItem = null;
    this.recalculate = false;
    this.router.navigate([RouteConfig.art.path], {
      replaceUrl: false
    });
  }

}
