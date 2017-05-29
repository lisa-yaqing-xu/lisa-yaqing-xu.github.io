import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lx-gallery',
  templateUrl: './lx-gallery.component.html',
  styleUrls: ['../../styles/body.scss', './lx-gallery.component.scss']
})
export class LxGalleryComponent implements OnInit {
  @Input() data: Array<any>;
  selectedSection: number = -1;
  selectedPiece: number = -1;

  constructor() { }

  ngOnInit() {
  }

  isHidden(){
    return this.selectedPiece === -1 || this.selectedSection === -1;
  }

  getSelectedURL(){
    return this.data[this.selectedSection].content[this.selectedPiece];
  }

  showImage(section, piece){
    this.selectedSection = section;
    this.selectedPiece = piece;
  }

  hideImage($event){
    if ($event.currentTarget === $event.target) {
      this.showImage(-1,-1);
    }
  }

  nextImage(){
    const sectionSize = this.data[this.selectedSection].content.length;
    const p = this.selectedPiece + 1;
    const nextPiece = (p >= sectionSize)?0:p;
    const nextSection = (nextPiece === 0)?((this.selectedSection+1)%this.data.length):this.selectedSection;
    this.selectedPiece = nextPiece;
    this.selectedSection = nextSection;
  }

  prevImage(){
    const p = this.selectedPiece - 1;
    const changeSections = (p < 0);
    const nextSection = (changeSections)?((this.selectedSection + this.data.length -1)%this.data.length):this.selectedSection;
    const sectionSize = this.data[nextSection].content.length;
    this.selectedPiece = (changeSections)?(sectionSize-1):p;
    this.selectedSection = nextSection;
  }

}
