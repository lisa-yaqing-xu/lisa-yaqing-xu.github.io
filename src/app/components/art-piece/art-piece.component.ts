import { Component, Input } from '@angular/core';
import { IGalleryItem, IGallerySubItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-art-piece',
  templateUrl: './art-piece.component.html',
  styleUrls: ['./art-piece.component.scss']
})
export class ArtPieceComponent {
  @Input() item: IGalleryItem | IGallerySubItem;
  @Input() enableIndividualInfo: boolean = false;
  
  showInfo = false;

  toggleInfo(){
    this.showInfo = !this.showInfo;
  }

}
