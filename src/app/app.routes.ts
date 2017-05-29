import {Routes} from "@angular/router";
import { MainComponent } from './view/main/main.component';
import { AboutComponent } from './view/about/about.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { ContactComponent } from './view/contact/contact.component';

export const appRoutes: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'about', pathMatch: 'full'},
      {path:'about', component: AboutComponent },
      {path:'code', component: CodeComponent },
      {path:'art', component: ArtComponent },
      {path:'contact', component: ContactComponent }
    ]
  },
  //define all my github.io pages outside of angular here
  {path:'ChanConvexHull', redirectTo: 'http://lisaxu.me/ChanConvexHull',component:null},
  {path:'chanconvexhull', redirectTo: 'ChanConvexHull', pathMatch: 'full'}
];

