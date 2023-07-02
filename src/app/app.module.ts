import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { CodeComponent } from './view/code/code.component';
import { ArtComponent } from './view/art/art.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { SkillChartComponent } from './components/skill-chart/skill-chart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryOverlayComponent } from './components/gallery-overlay/gallery-overlay.component';
import { ArtDetailsComponent } from './view/art-details/art-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CodeComponent,
    ArtComponent,
    HeaderComponent,
    FooterComponent,
    TimelineComponent,
    SkillBarComponent,
    SkillChartComponent,
    GalleryComponent,
    GalleryOverlayComponent,
    ArtDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
