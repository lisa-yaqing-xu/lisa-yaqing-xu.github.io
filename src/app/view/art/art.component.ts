import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss', '../../styles/body.scss']
})
export class ArtComponent implements OnInit {
  artData: Array<any> = this.getArtData();
  constructor() { }

  ngOnInit() {
    console.log(this.artData);
  }

  getImgPath(name){
    return `../../../assets/art/${name}.png`;
  }

  getArtData(){

    let artData = [
      {
        title: 'Vector/Logos',
        content: ['logo_bunbun','logo_ap','logo_ae']
      },
      {
        title: 'Illustrations',
        content: ['draw_ayra','draw_edward','draw_hoshidos', 'draw_shiro', 'draw_takuobo']
      },
      {
        title: 'Character Design',
        content: ['design_thyra1','design_thyra2','design_essa', 'design_destin']
      }
    ];

    return artData.map(section=>{
      section.content = section.content.map(name=>this.getImgPath(name));
      return section;
    });
  }

}
