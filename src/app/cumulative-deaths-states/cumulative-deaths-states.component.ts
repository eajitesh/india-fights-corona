import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { IndianStatesService } from '../indian-states.service';

@Component({
  selector: 'app-cumulative-deaths-states',
  templateUrl: './cumulative-deaths-states.component.html',
  styleUrls: ['./cumulative-deaths-states.component.css']
})
export class CumulativeDeathsStatesComponent implements OnInit {

  deathData = [];
  public barChartData: ChartDataSets = [];
  public barChartLabels = [];
  public barChartColors: Color[] = [];
  
  // constructor
  //
  constructor(private coronaService: IndianStatesService) { }

  ngOnInit() {
    this.deathData = this.coronaService.getCumulativeDeathForStates()

    this.barChartData = [
      { data: this.deathData[0], label: 'States Deaths (Cumulative)'}
    ];

    this.barChartLabels = this.deathData[1];

    this.barChartColors = [
      { backgroundColor: 'red' },
    ]
  }
  
  public barChartOptions = {
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;

}