import { Component, OnInit } from '@angular/core';

import statesData  from '../data/states_helpline.json';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {
  jsonStates:any = statesData.statesNos;
  jsonUTs:any = statesData.utNos;

  constructor() { }

  ngOnInit() {
  }

}