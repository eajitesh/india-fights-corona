import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

import { CoronaNewsService } from '../corona-news.service';

@Component({
  selector: 'app-news-ticker',
  templateUrl: './news-ticker.component.html',
  styleUrls: ['./news-ticker.component.css']
})
export class NewsTickerComponent implements OnInit {

  name = 'Angular';
  vmPlaceholder: any; 
  eventList = new Array<string>();

   constructor(private coronaNewsService: CoronaNewsService) { }

  ngOnInit() {
    this.eventList = this.coronaNewsService.getNews()
    // this.eventList.push(`Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only`);
    // this.eventList.push(`Govt Extends Ban on International Flights Till April 14`);
    // this.eventList.push(`G20 nations to pump in $5 trillion into global economy`);
    //  this.eventList.push(`1.7 Lakh Crore Package for Poor, Daily Wagers`);
    // this.eventList.push(`India fights Corona with 21 days lockdown lasting upto 14 April`);
    
  }

  ngAfterViewInit() {
    sdk.embedProjectId('myDiv','angular-7-node').then(vm => {
      this.vmPlaceholder = vm;
    });
  }

  editFiles(): void {
      var obj = {};
    obj['src/app/app.component.html'] = '<h1>This was updated      programmatically!</h1>';
    obj['test.html'] = 'Random file';
    this.vmPlaceholder.applyFsDiff({
          create: obj,
          destroy: ['']
        });    
  }

}