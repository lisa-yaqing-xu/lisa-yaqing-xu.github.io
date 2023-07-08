import { Component, HostBinding, Input } from '@angular/core';
import { IGalleryMainItem, IGalleryItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-art-piece',
  templateUrl: './art-piece.component.html',
  styleUrls: ['./art-piece.component.scss']
})
export class ArtPieceComponent { 
  @Input() item: IGalleryItem;
  @Input() enableIndividualInfo: boolean = false;

  private _item: IGalleryItem;
  showInfo = false;

  toggleInfo($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    this.showInfo = !this.showInfo;
  }
}
