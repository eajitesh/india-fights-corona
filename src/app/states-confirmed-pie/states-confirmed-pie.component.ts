import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { IndianStatesService } from '../indian-states.service';

@Component({
  selector: 'app-states-confirmed-pie',
  templateUrl: './states-confirmed-pie.component.html',
  styleUrls: ['./states-confirmed-pie.component.css']
})
export class StatesConfirmedPieComponent implements OnInit {

  public pieChartLabels:string[];
  public pieChartData:number[];

  constructor(private coronaService: IndianStatesService) { }

  ngOnInit() {
    this.pieChartLabels = this.coronaService.getStatesName();
    this.pieChartData = this.coronaService.getLatestStatewiseConfirmedCasesCount();
  }

   // Pie
  // public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  // public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}