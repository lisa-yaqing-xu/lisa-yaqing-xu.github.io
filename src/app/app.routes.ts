import {Routes} from "@angular/router";
import { MainComponent } from './view/main/main.component';
import { AboutComponent } from './view/about/about.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { ResumeComponent } from './view/resume/resume.component';

export const appRoutes: Routes = [
  {path: 'test', component: MainComponent}
  /*{path: '', component: MainViewComponent},
  {
    path: 'projects', component: ProjectDataViewComponent,
    children: [
      {path: '', redirectTo: 'summary', pathMatch: 'full'},
      {path:'summary', component: ProjectOverviewSummarySubview },
      {path:'list', component: ProjectListSubview },
      {path:'expenses', component: ProjectOverviewSummarySubview },
    ]
  },*/
];

