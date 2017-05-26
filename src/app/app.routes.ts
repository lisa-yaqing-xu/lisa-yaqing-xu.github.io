import {Routes} from "@angular/router";
import { MainComponent } from './view/main/main.component';
import { AboutComponent } from './view/about/about.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { ResumeComponent } from './view/resume/resume.component';

export const appRoutes: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'about', pathMatch: 'full'},
      {path:'about', component: AboutComponent },
      {path:'code', component: CodeComponent },
      {path:'art', component: ArtComponent },
      {path:'resume', component: ResumeComponent },
    ]
  },
  {path:'ChanConvexHull', component:null}
];

