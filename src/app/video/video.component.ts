import { Component, VERSION, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { VgPlayer } from 'ngx-videogular';
import { Subscription, timer } from 'rxjs';

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

  constructor() { }

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
    this.videoTime =  parseInt(this.vgPlayer?.api.currentTime, 10);
   // console.log('Video time is:', this.videoTime );
  });
  }

  ngOnDestroy(): void {
    if (this.timerSubsc ) {
      this.timerSubsc.unsubscribe()
    }
  }
}
