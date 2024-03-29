import { Component, HostListener, QueryList, ViewChildren } from '@angular/core';
import { IExpandedGalleryData, IGallery, IGalleryMainItem, IGalleryMap, IGallerySelection } from '../../interfaces/gallery.interface';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { ArtService } from 'src/app/services/art.service';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras, ParamMap, Params, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/routes.config';
import { SMALL_SCREEN } from 'src/app/config/breakpoints';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent {
  @ViewChildren('galleries') galleries: QueryList<GalleryComponent>;
  @HostListener('window:resize') onResize() {
    // THIS IS TEMPORARY
    // THIS STAYS UNTIL I GET SWIPE WORKING AND THEN IT GOES
    this.smallScreen = window.innerWidth <= SMALL_SCREEN;
  }
  // this is for displaying individual pieces 
  public art: IGallery[];
  public smallScreen = window.innerWidth <= SMALL_SCREEN;

  private artMap: IGalleryMap;
  private recalculate = true;
  private defaultNavigationExtras: NavigationExtras  = {
    replaceUrl: true,
    relativeTo: this.activatedRoute,
    queryParams: {}
  };
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
    const name = params.get('name');
    const indexParam = params.get('index');
    if(name == null && indexParam == null){
      return;
    }
    let index: number;
    if (indexParam == null) {
      index = 0;
    } else {
      index = parseInt(indexParam);
    }
    const piece = name ? this.artMap[name] : null;
    if (!piece || isNaN(index)) {
      this.router.navigate([], this.defaultNavigationExtras);
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
    const queryParams = { name: item.name, index: undefined };
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
