import { CommonModule } from '@angular/common';
import { animate, style, state, trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { NgxTickerLabelComponent } from './ngx-ticker-label.component';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  Renderer2,
  QueryList,
  ViewChild,
  ViewChildren,
  HostListener
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-ticker',
  templateUrl: './ngx-ticker.component.html',
  styleUrls: ['./ngx-ticker.component.scss']
})
export class NgxTickerComponent implements OnInit, AfterViewInit {
  @Input() currentState;
  // Highlighted text.
  @Input() title = '';
  // List of messages to be displayed.
  @Input() events: Array<string> = [];
  // Set the time interval between the text exchange.
  @Input() interval = 5000;
  // Sets the current count visibility.
  @Input() showCounter = true;
  // Change the default blue color.
  @Input() defaultColor: string;
  // Change the back ground color of content.
  @Input() backColor: string;

  @ViewChild('nt') private ntRef: ElementRef;
  @ViewChild('ntCounter') private ntCounterRef: ElementRef;
  @ViewChild('ntTitle') private ntTitleRef: ElementRef;
  @ViewChild('nDart') private nDart: ElementRef;
  @ViewChildren('ntNavi') ntNaviRef: QueryList<ElementRef>;

  private ACTIONS = {
    'NEXT': 1,
    'PREV': -1
  };

  autoNext: any;
  item: string;
  toState = 'enter';
  current: string;
  position = -1;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.autoNavigate();
    this.navigate('NEXT'); // initialize
  }

  ngAfterViewInit(): void {
    this.defaultColor = this.defaultColor || '#1976D2';

    // this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.renderer.setStyle(this.ntRef.nativeElement, 'background-color', this.backColor || '#FFFFFF');
    this.renderer.setStyle(this.ntRef.nativeElement, 'border-color', this.defaultColor);

    if (this.ntCounterRef) {
      this.renderer.setStyle(this.ntCounterRef.nativeElement, 'background-color', this.defaultColor);
    }

    if (this.ntTitleRef) {
      this.renderer.setStyle(this.ntTitleRef.nativeElement, 'background-color', this.defaultColor);
      this.renderer.setStyle(this.nDart.nativeElement, 'border-left-color', this.defaultColor);
    }

    this.ntNaviRef.forEach(item => {
      this.renderer.setStyle(item.nativeElement, 'border-color', this.defaultColor);
    });

  }

  @HostListener('mouseover')
  onMouseOver() {
    clearInterval(this.autoNext);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.autoNavigate();
  }

  private autoNavigate() {
    if (this.interval > 0) {
      this.autoNext = setInterval(() => this.navigate('NEXT'), this.interval);
    } else {
      clearInterval(this.autoNext);
    }
  }

  public navigate(action: string) {
    if (typeof this.ACTIONS[action] === 'undefined') {
      return;
    }

    const shift = this.ACTIONS[action];
    this.position = this.position + shift;

    if (this.events) {
      this.changeState('leave');

      setTimeout(() => { 
          if (this.position < 0) {
            this.position = this.events.length - 1;
          } else if (this.position >= this.events.length) {
            this.position = 0;
          }

          this.item = this.events[this.position];
          this.current = `${(this.position + 1)}/${this.events.length}`;
          this.changeState('enter')
      }, 500);      
      
    }
  }

  changeState(state: any) {
    this.toState = state;
  }

}