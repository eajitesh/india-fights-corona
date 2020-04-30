import { Component, OnInit } from '@angular/core';

import { CoronaInfoService } from '../corona-info.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-recovery-rate',
  templateUrl: './recovery-rate.component.html',
  styleUrls: ['./recovery-rate.component.css']
})
export class RecoveryRateComponent implements OnInit {

  public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0 
  };

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
  
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private coronaService: CoronaInfoService) { }

  ngOnInit() {
    
    this.lineChartData = [
    {
      data: this.coronaService.getRecoveryRate(), 
      label: 'Rate of Recovery',  
      lineTension: 0
    },
    ]
    this.lineChartLabels = this.coronaService.getDailyInfoDischargedDeathInfo(); 

  }

}