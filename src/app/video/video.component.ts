import { Component, VERSION, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { VgPlayer } from 'ngx-videogular';
import { Subscription, timer } from 'rxjs';
import { VideoSentence, videoText } from './videoDataMsg';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  timerSubsc: Subscription | undefined;
  public videoTime =  0;

  @ViewChild(VgPlayer) vgPlayer : VgPlayer | undefined
  public videoMessage: VideoSentence [];

  constructor() {
    this.videoMessage = videoText;
  }

  ngOnInit(): void {

  }

  public vgPlayerChanged(event: any) {
    console.log('Vg player changed with event', event);
  }

  public accessVgPlayer() {
    let time = '';
    if (this.vgPlayer) {
      time =  this.vgPlayer.api.currentTime;
      console.log('Video time is:', time);
      // console.log('Text tracks is:', this.vgPlayer.api.textTracks);
    }
  }
  ngAfterViewInit(): void {
   this.timerSubsc =  timer(0, 1000).subscribe(n => {
    //console.log('timer', n);
    this.resetHiglihtedVideoByVideTime(parseInt(this.vgPlayer?.api.currentTime, 10));
   // console.log('Video time is:', this.videoTime );
  });
  }

  resetHiglihtedVideoByVideTime( videoTime: number) {
    this.videoTime =  videoTime;
    this.videoMessage.forEach ( vSentence => {
      vSentence.currentlyInSpeach = (videoTime >= vSentence.timeInterval[0] && 
        videoTime <= vSentence.timeInterval[1]) ;
    });

  }

  ngOnDestroy(): void {
    if (this.timerSubsc ) {
      this.timerSubsc.unsubscribe()
    }
  }
}
