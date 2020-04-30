import { Component, OnInit } from '@angular/core';
import { CoronaInfoService } from '../corona-info.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-india-daily-discharged-death-ratio',
  templateUrl: './india-daily-discharged-death-ratio.component.html',
  styleUrls: ['./india-daily-discharged-death-ratio.component.css']
})
export class IndiaDailyDischargedDeathRatioComponent implements OnInit {

 public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0 
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(148,159,177,1)',
      backgroundColor: 'rgba(148,159,177,0.2)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private coronaService: CoronaInfoService) { }

  ngOnInit() {
    
    this.lineChartData = [
    {
      data: this.coronaService.getDailyDischargedDeathRatio(), 
      label: 'Cured to Death Ratio',  
      lineTension: 0
    },
    ]

    // this.lineChartLabels = this.coronaService.getWeeksInfo()
    // this.lineChartData = this.coronaService.getDailyDischargedDeathRatio();
    this.lineChartLabels = this.coronaService.getDailyInfoDischargedDeathInfo(); 

  }

  public lineChartColors:Array<any> = [
    { // grey
     backgroundColor: 'rgb(57,255,20)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

}