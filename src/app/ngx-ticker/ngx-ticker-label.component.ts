import { SimpleChanges } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, state, trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import {
  Component,
  Input
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-ticker-label',
  templateUrl: './ngx-ticker-label.component.html',
  styleUrls: ['ngx-ticker-label.component.scss'],
  animations: [
    trigger('tickerAnimation',[
      state('leave',
        style({
            opacity: 0
        })),
      state('enter',
        style({
            opacity: 1
        })),
      transition('*=>enter', animate('1s')),
      transition('*=>leave', animate('1s')),
    ])
  ]
})

export class NgxTickerLabelComponent {
  @Input() item;
  // Highlighted text.
  currentItem = '';
  currentState = 'void';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      console.log("ngOnChanges: ", this.item);
      this.changeState('leave');
      setTimeout(() => {
        this.currentItem = this.item;
        this.changeState('enter');
      },1500);
    }
  }

  changeState(state: string) {
    console.log(state);
    this.currentState = state;
  }

  animationStarted($event) {
    console.log();
  }

  animationDone($event) {
    console.log();
  }

}