import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { IndianStatesService } from '../indian-states.service';

@Component({
  selector: 'app-daily-states-death',
  templateUrl: './daily-states-death.component.html',
  styleUrls: ['./daily-states-death.component.css']
})
export class DailyStatesDeathComponent implements OnInit {

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


  constructor(private coronaService: IndianStatesService) { }

  ngOnInit() {
    this.lineChartData = this.coronaService.getDailyDeathCases()
    this.lineChartLabels = this.coronaService.getDailyDeathInfo()
  }



}