import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { IndianStatesService } from '../indian-states.service';

@Component({
  selector: 'app-recovery-status-states',
  templateUrl: './recovery-status-states.component.html',
  styleUrls: ['./recovery-status-states.component.css']
})
export class RecoveryStatusStatesComponent implements OnInit {

  recoveryData = [];
  public barChartData: ChartDataSets = [];
  public barChartLabels = [];
  public barChartColors: Color[] = [];

  constructor(private coronaService: IndianStatesService) { }

  ngOnInit() {
    this.recoveryData = this.coronaService.getRecoveryStatusForStates();

    this.barChartData = [
      { data: this.recoveryData[0], label: 'States Recovery Status'}
    ];

    this.barChartLabels = this.recoveryData[1];

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