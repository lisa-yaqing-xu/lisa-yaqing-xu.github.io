import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';


import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { AboutComponent } from './view/about/about.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { ContactComponent } from './view/contact/contact.component';
import { LxHeaderComponent } from './components/lx-header/lx-header.component';
import { LxSkillBarComponent } from './components/lx-skill-bar/lx-skill-bar.component';
import { LxSkillChartComponent } from './components/lx-skill-chart/lx-skill-chart.component';
import { LxExpTimelineComponent } from './components/lx-exp-timeline/lx-exp-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    CodeComponent,
    ArtComponent,
    ContactComponent,
    LxHeaderComponent,
    LxSkillBarComponent,
    LxSkillChartComponent,
    LxExpTimelineComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
