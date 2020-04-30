import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTickerComponent } from './ngx-ticker.component';
import { NgxTickerLabelComponent } from './ngx-ticker-label.component';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [NgxTickerComponent, NgxTickerLabelComponent],
  exports: [NgxTickerComponent, NgxTickerLabelComponent]
})
export class NgxTickerModule { }