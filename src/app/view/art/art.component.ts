import { Component, OnInit } from '@angular/core';
import { LXGallery } from 'src/app/config/art';
import { IGallery, IGalleryItem, IGallerySelection } from 'src/app/interfaces/gallery.interface';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  pieceId?: string; // this is for displaying individual pieces
  art: IGallery[] = LXGallery;

  currentItem?: IGalleryItem;
  currentSection: number = -1;
  currentIndex: number = -1;
  next: { index: number, section: number };
  prev: { index: number, section: number };

  constructor() { }

  ngOnInit(): void {
  }

  select(sectionIndex: number, selection: IGallerySelection) {
    this.currentSection = sectionIndex;
    this.currentIndex = selection.index;
    this.setCurrentItem();
    this.prev = this.calcPrev();
    this.next = this.calcNext();
  }

  setCurrentItem() {
    this.currentItem = this.art[this.currentSection].items[this.currentIndex];
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
  }

  goNext(){
    this.prev = { section: this.currentSection, index: this.currentIndex };
    this.currentIndex = this.next.index;
    this.currentSection = this.next.section;
    this.next = this.calcNext();
    this.setCurrentItem();
  }

  closeOverlay(){
    this.prev = null;
    this.next = null;
    this.currentIndex = -1;
    this.currentSection = -1;
    this.currentItem = null;
  }

}
