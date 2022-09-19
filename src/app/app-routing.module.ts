import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordVideoComponent } from './record-video/record-video.component';
import { VideoComponent } from './video/video.component';
import { YoutubeVideComponent } from './youtube-vide/youtube-vide.component';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent
},
{
  path: 'video',
  component: VideoComponent
},
{
  path: 'youtube-video',
  component: YoutubeVideComponent
},
{
  path: 'record-video',
  component: RecordVideoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
