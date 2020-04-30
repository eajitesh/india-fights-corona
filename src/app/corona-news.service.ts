import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class CoronaNewsService {

  // Important News
  // 
  news = ["Maharashtra, Kerala, Tamil Nadu, Delhi and Andhra Pradesh tops the states list in no. of Corona infections",
  "Key Breakthrough - In US, Doctors are employing two drugs in combination — hydroxychloroquine (HC) and azithromycin (AZ) — to treat Covid-19 patients.",
    "PM Modi launches PM CARES Relif Fund - Accept Microdonations as well", "Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
  "Govt Extends Ban on International Flights Till April 14",
  "1.7 Lakh Crore Package for Poor, Daily Wagers",
  "India fights Corona with 21 days lockdown lasting upto 14 April"
  ]

  constructor() { }

  getNews() {
    return this.news
  }

}