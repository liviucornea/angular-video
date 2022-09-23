import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { RecordVideoComponent } from './record-video/record-video.component';
import { YoutubeVideComponent } from './youtube-vide/youtube-vide.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ChildHomeComponent } from './home/child-home/child-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    RecordVideoComponent,
    YoutubeVideComponent,
    ChildHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxYoutubePlayerModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
