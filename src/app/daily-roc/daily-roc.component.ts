import { Component, OnInit } from '@angular/core';
import { CoronaInfoService } from '../corona-info.service';

@Component({
  selector: 'app-daily-roc',
  templateUrl: './daily-roc.component.html',
  styleUrls: ['./daily-roc.component.css']
})
export class DailyRocComponent implements OnInit {

  rocArr = [];

  lineChartData:Array<any> = [];
  lineChartLabels = [];

  constructor(private coronaService: CoronaInfoService) { }

  ngOnInit() {
    this.rocArr = this.coronaService.getDailyROC();
    this.lineChartLabels = this.coronaService.getROCDayInfo();

    this.lineChartData = [
      {
        data: this.rocArr, 
        label: 'Rate of Change (Daily Confirmed Cases)', 
        lineTension: 0
      }
    ];  
  }

public lineChartOptions:any = {
    responsive: true,
    lineTension: 0
  };

  public lineChartColors:Array<any> = [
    { // grey
     backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}