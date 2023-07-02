import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { RouteConfig } from './config/routes.config';
import { ArtDetailsComponent } from './view/art-details/art-details.component';
import { artGuard } from './guards/art.guard';
const routes: Routes = [
  { path: '', redirectTo: RouteConfig.main.path, pathMatch: 'full' },
  { path: RouteConfig.main.path, component: MainComponent },
  { path: RouteConfig.code.path, component: CodeComponent },
  { path: RouteConfig.art.path, component: ArtComponent },
  { path: `${RouteConfig.art.path}/:id`, component: ArtDetailsComponent, canActivate: [artGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        bindToComponentInputs: true
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
