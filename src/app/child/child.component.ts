import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  animations: [
    trigger('slide', [
      state('show', style({
        height: '*'
      })),
      state('hide', style({
        height: '0'
      })),
      transition('show => hide', animate('400ms ease-in')),
      transition('hide => show', animate('400ms ease-out'))
    ])
  ]
})
export class ChildComponent implements OnInit {

  mySlideState = 'hide';

  constructor() { }

  ngOnInit() {
  }

  state(): void {

    if ('hide' === this.mySlideState) {
      this.mySlideState = 'show';
     } else {
      this.mySlideState = 'hide';
     }
  }
}
