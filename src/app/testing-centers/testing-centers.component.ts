import { Component, OnInit } from '@angular/core';
import tcData  from '../data/testing_centers.json';
import tcpData  from '../data/testing_centers_private.json';
import { TestingCenters } from '../testing-centers';
import { CoronaDataService } from '../corona-data.service';

@Component({
  selector: 'app-testing-centers',
  templateUrl: './testing-centers.component.html',
  styleUrls: ['./testing-centers.component.css']
})
export class TestingCentersComponent implements OnInit {

  jsonStates:any = tcData.states;
  jsonUTs:any = tcData.uts;

  jsonStatesPrivate:any = tcpData.states
  jsonUTsPrivate:any = tcpData.uts

  testing_centers: TestingCenters[];

  constructor(private coronaService: CoronaDataService) { }

  ngOnInit() {
    // this.coronaService.getTestingCenters().subscribe(data => {
    //   this.testing_centers = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as TestingCenters;
    //   })
    // });
  }

}