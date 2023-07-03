import { Component, Input, OnInit } from '@angular/core';
import { LXGalleryMap } from 'src/app/config/art.config';
import { RouteConfig } from 'src/app/config/routes.config';
import { IGalleryItem, IGallerySubItem } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.scss']
})
export class ArtDetailsComponent implements OnInit {
  @Input() id?: string;
  public title: string = 'Untitled';
  public description: string[] = [];
  public items: (IGalleryItem | IGallerySubItem)[] = [];
  public backLink = `/${RouteConfig.art.path}`;
  
  constructor() { }

  ngOnInit(): void {
    const content = LXGalleryMap[this.id];
    this.title = content.data.title;
    this.description = content.data.description?.split('\n') || [];
    this.items = [].concat(content.mainItems);
    if(content.subItems){
      this.items = this.items.concat(content.subItems);
    }
  }

}
