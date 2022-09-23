import { Component, Input, OnInit } from '@angular/core';
import { OnChange } from 'src/app/utils/onChangeDecorator';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent implements OnInit {

  @OnChange<string>(function(newValue, changes) {
    console.log('Previous value for name was: ', changes?.previousValue);
    console.log('Name has been chnaged to: ', newValue);
  })
  @Input()
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
