import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare var MediaRecorder: any;

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.scss']
})
export class RecordVideoComponent implements OnInit, OnDestroy {
  @ViewChild('recordedVideo')
  recordVideoElementRef!: ElementRef;
  @ViewChild('video')
  videoElementRef!: ElementRef;
  
  videoElement!: HTMLVideoElement;
  recordVideoElement!: HTMLVideoElement;
  mediaRecorder: any;
  recordedBlobs!: Blob[];
  isRecording: boolean = false;
  downloadUrl!: string;
  stream!: MediaStream;
  isPlayingRecording = false;

  constructor() { }

  async ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 360
        },
        audio: true
      })
      .then(stream => {
        this.videoElement = this.videoElementRef.nativeElement;
        // next 2 lines to eliminat microphone hiss
        //How to avoid echo and noise in javascript for webrtc
        // https://stackoverflow.com/questions/18406193/how-to-avoid-echo-and-noise-in-javascript-for-webrtc
        this.videoElement.volume = 0;
        this.videoElement.muted = true;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;

        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });
  }

  startRecording() {
    this.isPlayingRecording = false;
    this.recordedBlobs = [];
    let options: any = { mimeType: 'video/webm' };

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
      console.log('Media recorder created', this.mediaRecorder );
    } catch (err) {
      console.log(err);
      return;
    }

    this.mediaRecorder.start(); // collect 100ms of data
    this.isRecording = !this.isRecording;
    this.onDataAvailableEvent();
    this.onStopRecordingEvent();
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = !this.isRecording;
    console.log('Recorded Blobs: ', this.recordedBlobs);
  }

  playRecording() {
    this.isPlayingRecording = true;
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.');
      return;
    }
    this.recordVideoElement.play();
    this.recordVideoElement.onended = (event) => {
      console.log('Video stopped either because 1) it was over, ' +
          'or 2) no further data is available.');
          this.isPlayingRecording = false;
    };
  }

  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  onStopRecordingEvent() {
    try {
      this.mediaRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.recordedBlobs, {
          type: 'video/webm'
        });
        this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
        this.recordVideoElement.src = this.downloadUrl;
      };
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    // this.mediaRecorder.stop();
      this.mediaRecorder = null;
  }

}
