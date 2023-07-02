import { Component, Input, OnInit } from '@angular/core';
import { LXGalleryMap } from 'src/app/config/art.config';
import { IGalleryItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.scss']
})
export class ArtDetailsComponent implements OnInit {
  @Input() id?: string;
  data: IGalleryItem[];
  constructor() { }

  ngOnInit(): void {
    this.data = LXGalleryMap[this.id];
    console.log(this.data);
  }

}
