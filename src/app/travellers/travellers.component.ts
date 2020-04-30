import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.css']
})
export class TravellersComponent implements OnInit {
  
  name = new FormControl('');
  mobile = new FormControl('');
  age = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}