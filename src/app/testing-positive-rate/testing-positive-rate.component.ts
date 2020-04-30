import { Component, OnInit } from '@angular/core';

import { CoronaInfoService } from '../corona-info.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-testing-positive-rate',
  templateUrl: './testing-positive-rate.component.html',
  styleUrls: ['./testing-positive-rate.component.css']
})
export class TestingPositiveRateComponent implements OnInit {
  public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0 
  };
  public lineChartColors:Array<any> = [
    { // grey
     backgroundColor: 'rgb(255,255,20)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private coronaService: CoronaInfoService) { }

  ngOnInit() {

    this.lineChartData = [
    {
      data: this.coronaService.getTestingRate(), 
      label: 'Rate of Confirmed Case vs Testing',  
      lineTension: 0
    },
    ]
    this.lineChartLabels = this.coronaService.getTestingDayInfo(); 
  }

}