import { Component, OnInit } from '@angular/core';
import { CoronaInfoService } from '../corona-info.service';
import { CoronaImageService } from '../corona-image-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  name = 'India Fights Corona';
  totalInfected = 0;
  totalDeath = 0;
  totalDischarged = 0;
  totalActiveCases = 0;

  lastUpdated = '';

  coronaImage = ''

  constructor(private coronaService: CoronaInfoService, private coronaImageService: CoronaImageService) { 
    // coronaImageService.getCoronaImage().subscribe(url=>{
    //   if(url){
    //      this.coronaImage = url
    //       console.log("Corona Image ---------------: " + this.coronaImage)
    //   }
    // })
   
  }

  ngOnInit() {
    this.totalInfected = this.coronaService.getInfected();
    this.totalDeath =  this.coronaService.getDeaths();
    this.totalDischarged =  this.coronaService.getDischarged();
    this.lastUpdated = this.coronaService.getLastUpdated();
    this.totalActiveCases = this.coronaService.getActiveCases();
  }

}