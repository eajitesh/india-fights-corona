import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { CoronaInfoService } from '../corona-info.service';

@Component({
  selector: 'app-days-to-double',
  templateUrl: './days-to-double.component.html',
  styleUrls: ['./days-to-double.component.css']
})
export class DaysToDoubleComponent implements OnInit {

  public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0 
  };
  
  public lineChartColors:Array<any> = [
    { // grey
     backgroundColor: 'rgb(57, 132, 206)',
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
    this.lineChartLabels = this.coronaService.getDoubleDaysCount()

    this.lineChartData = [
    {
      data: this.coronaService.getDaysTookToDouble(),
      label: 'No. of Days to Double Infected Cases',  
      lineTension: 0
    },
    ]
  }

}