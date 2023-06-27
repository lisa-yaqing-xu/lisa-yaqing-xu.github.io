import { Component, OnInit } from '@angular/core';
import { LXGallery } from 'src/app/config/art';
import { IGallery } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  pieceId?: string;
  art: IGallery[] = LXGallery;
  constructor() { }

  ngOnInit(): void {
  }

}
