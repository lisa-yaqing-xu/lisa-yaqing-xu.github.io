import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { RouteConfig } from './config/routes';
const routes: Routes = [
  {path: '', redirectTo: RouteConfig.main.path, pathMatch: 'full'},
  { path: RouteConfig.main.path, component: MainComponent },
  { path: RouteConfig.code.path, component: CodeComponent },
  { path: RouteConfig.art.path, component: ArtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
