import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { AboutComponent } from './view/about/about.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { ResumeComponent } from './view/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    CodeComponent,
    ArtComponent,
    ResumeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
