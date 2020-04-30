import { Component, OnInit } from '@angular/core';
import { IndianStatesService } from '../indian-states.service';

@Component({
  selector: 'app-india-vs-corona',
  templateUrl: './india-vs-corona.component.html',
  styleUrls: ['./india-vs-corona.component.css']
})
export class IndiaVsCoronaComponent implements OnInit {

  dailyInfo:Array<any> = []
  dailyConfirmedCases:Array<any> = []
  dailyRecoveredCases:Array<any> = []

  dailyStatewiseInfo = [];

  constructor(private coronaService: IndianStatesService) { }

  ngOnInit() {
    this.dailyInfo = this.coronaService.getDailyInfo()
    this.dailyConfirmedCases = this.coronaService.getDailyConfirmedCases()
    this.dailyRecoveredCases = this.coronaService.getDailyRecoveredCases()
    this.dailyStatewiseInfo = this.coronaService.getLatestStatewiseConfirmedCases()

  }

}