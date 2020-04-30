import { Component, OnInit } from '@angular/core';
import { CoronaInfoService } from '../corona-info.service';

@Component({
  selector: 'app-everyday-line-chart',
  templateUrl: './everyday-line-chart.component.html',
  styleUrls: ['./everyday-line-chart.component.css']
})
export class EverydayLineChartComponent implements OnInit {

  totalInfected = 0;
  infectedArr = [];
  public lineChartData:Array<any> = [];
  public lineChartLabels = [];

  constructor(private coronaService: CoronaInfoService) { 
  }

  ngOnInit() {
    this.totalInfected = this.coronaService.getInfected();
    this.infectedArr = this.coronaService.getDailyInfectedHistory();
    this.infectedArr.push(this.totalInfected);
    this.lineChartData = [
      {
        data: this.infectedArr, 
        label: 'Daily Corona Cases', 
        lineTension: 0
      }
    ];  
    this.lineChartLabels = this.coronaService.getDailyInfo();
  }

  // public lineChartLabels:Array<any> = ['09/03', '10/03', '11/03', '12/03', '13/03', '14/03', '15/03',
  // '16/03', '17/03', '18/03', '19/03',
  // '20/03', '21/03', '22/03', '23/03', 
  // '24/03', '25/03', '26/03', '27/03', '28/03'];

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