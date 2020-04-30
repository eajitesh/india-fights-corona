import { Component, OnInit } from '@angular/core';

import { IndianStatesService } from '../indian-states.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-daily-state-histogram',
  templateUrl: './daily-state-histogram.component.html',
  styleUrls: ['./daily-state-histogram.component.css']
})
export class DailyStateHistogramComponent implements OnInit {

  totalInfected = 0;
  totalInfectedTillYesterday = 0;
  infectedArr = [];
  public barChartData:Array<any> = [];
  public barChartLabels = [];

  public barChartOptions: ChartOptions = {
    // scaleShowVerticalLines: false,
    responsive: true,
    showLines: true,
    tooltips: {enabled: true},
    animation: {duration: 2000},
    scales: {
        yAxes: [{
            gridLines: {
                display:true
            },
            display: true,
            ticks: {
              // max : 380,
              min: 0
            }
        }]
      }
};

  states = [];

  constructor(private coronaService: IndianStatesService) { 
  }

  ngOnInit() {
    // this.totalInfected = this.coronaService.getInfected();
    this.states = this.coronaService.getStatesName()
    this.infectedArr = this.coronaService.getDailyConfirmedCasesByState('Maharashtra');
    
    this.barChartData = [
      {
      data: this.infectedArr, 
      label: 'Daily Confirmed Cases for Maharashtra' ,  
      lineTension: 0
       },
       {
      data: this.infectedArr, 
      lineTension: 0,
      label: 'Depicting change in confirmed cases',
      type: 'line',
      fill: false
       },
    ];


    this.barChartLabels = this.coronaService.getDailyInfoForState();

  }

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  public barChartType = 'bar';
  public barChartLegend = true;

  onChange(value) {
    this.infectedArr = this.coronaService.getDailyConfirmedCasesByState(value);

    this.barChartData = [
      {
      data: this.infectedArr, 
      label: 'Daily Confirmed Cases for ' + value ,  
      lineTension: 0
       },
       {
      data: this.infectedArr, 
      lineTension: 0,
      label: 'Depicting change in confirmed cases',
      type: 'line',
      fill: false
       },
    ];
  }

  onStateClick(event: any) {
    this.infectedArr = this.coronaService.getDailyConfirmedCasesByState(event.target.value);

    this.barChartData = [
      {
      data: this.infectedArr, 
      label: 'Daily Confirmed Cases for ' + event.target.value ,  
      lineTension: 0
       },
       {
      data: this.infectedArr, 
      lineTension: 0,
      label: 'Depicting change in confirmed cases',
      type: 'line',
      fill: false
       },
    ];
  }

  
}