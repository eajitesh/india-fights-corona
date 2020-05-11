import { Component, OnInit } from '@angular/core';
import { ComparisonDataService } from '../comparison-data.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-comparison-infected-rate',
  templateUrl: './comparison-infected-rate.component.html',
  styleUrls: ['./comparison-infected-rate.component.css']
})
export class ComparisonInfectedRateComponent implements OnInit {

  dccArr:Array<any> = [];
  
  public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Infected Cases'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: '45 Days after 1000 infected cases'
        }
      }]
    }     
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

  constructor(private coronaService: ComparisonDataService) { }

  ngOnInit() {
    this.lineChartData = this.coronaService.getDailyComparisonByCountry()
    this.lineChartLabels = this.coronaService.getDayCountInfo()

  }
}