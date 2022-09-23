import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public nameForChild: string = 'Jhon Smith';
  
  constructor() { }

  ngOnInit(): void {
  }

  public changeNameForChild(): void {
    this.nameForChild = 'Jhon Travolta';
  }

}
