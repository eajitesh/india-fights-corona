import { Component, OnInit } from '@angular/core';
import { CoronaInfoService } from '../corona-info.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-india-daily-discharged-death',
  templateUrl: './india-daily-discharged-death.component.html',
  styleUrls: ['./india-daily-discharged-death.component.css']
})
export class IndiaDailyDischargedDeathComponent implements OnInit {

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
    this.lineChartData = this.coronaService.getDailyDischargedDeathCases();
    this.lineChartLabels = this.coronaService.getDailyInfoDischargedDeathInfo(); 
  }

}