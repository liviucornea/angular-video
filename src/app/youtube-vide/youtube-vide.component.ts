import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtube-vide',
  templateUrl: './youtube-vide.component.html',
  styleUrls: ['./youtube-vide.component.scss']
})
export class YoutubeVideComponent implements OnInit {
  id = 'To_0f5sn3lU';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
  private player: any;
  public ytEvent: any;
 

// https://www.youtube.com/watch?v=To_0f5sn3lU
constructor() {
}

ngOnInit(): void {
  
}

onStateChange(event: any) {
  this.ytEvent = event.data;
}
savePlayer(player: any) {
  this.player = player;
}

playVideo() {
  this.player.playVideo();
}

pauseVideo() {
  this.player.pauseVideo();
}
}
