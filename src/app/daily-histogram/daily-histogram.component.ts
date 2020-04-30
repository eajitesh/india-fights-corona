import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { CoronaInfoService } from '../corona-info.service';

@Component({
  selector: 'app-daily-histogram',
  templateUrl: './daily-histogram.component.html',
  styleUrls: ['./daily-histogram.component.css']
})
export class DailyHistogramComponent implements OnInit {
  
  totalInfected = 0;
  totalInfectedTillYesterday = 0;
  infectedArr = [];
  public barChartData:Array<any> = [];
  public barChartLabels = [];

  constructor(private coronaService: CoronaInfoService) { 
  }

  ngOnInit() {
    this.totalInfected = this.coronaService.getInfected();
    
    this.infectedArr = this.coronaService.getDailyInfectedHistogramHistory();
    this.totalInfectedTillYesterday = this.coronaService.getInfectedTillYesterday();
    this.infectedArr.push(this.totalInfected - this.totalInfectedTillYesterday);
    
    this.barChartData = [
      {
      data: this.infectedArr, 
      label: 'Daily Confirmed Cases',  
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

    this.barChartLabels = this.coronaService.getDailyInfo();

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
}