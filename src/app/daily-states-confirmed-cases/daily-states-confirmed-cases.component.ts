import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IndianStatesService } from '../indian-states.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-daily-states-confirmed-cases',
  templateUrl: './daily-states-confirmed-cases.component.html',
  styleUrls: ['./daily-states-confirmed-cases.component.css']
})
export class DailyStatesConfirmedCasesComponent implements OnInit {

  @ViewChild('multiSelect', {static: false}) multiSelect;
  public form: FormGroup;
  public loadContent: boolean = true;
  public name = 'StatesConfiredCases';
  public data = [];
  public settings = {};
  public selectedItems = [];


  canvheightval = 0;
  canvwidthval = 0;

  public lineChartData:Array<ChartDataSets> = [];
  public lineChartLabels:Array<Label> = [];

  constructor(private coronaService: IndianStatesService) { 
  }

  ngOnInit() {

    var confirmedCases = this.coronaService.getDailyStatesConfirmedCases()
    for(var i = 0; i < confirmedCases.length; i++) {
      this.lineChartData[i] = confirmedCases[i]
    }
    // this.lineChartData = this.coronaService.getDailyStatesConfirmedCases()
    this.lineChartLabels = this.coronaService.getDailyInfo()

    this.data = this.coronaService.getDailyStatesConfirmedCasesMultiSelect()

     this.settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: false,
      maxHeight: 197,
      itemsShowLimit: this.lineChartData.length,
      searchPlaceholderText: 'Select State',
      noDataAvailablePlaceholderText: 'No Data Available',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false
    };
    this.setForm();
  }

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    lineTension: 0 
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(148,159,177,1)',
      backgroundColor: 'rgba(148,159,177,0.2)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // ---- New Code -----
  public setForm() {
    // this.form = new FormGroup({
    //   name: new FormControl(this.data, Validators.required)
    // });
    this.form = new FormGroup({
        name: new FormControl(this.data, Validators.required)
      });

    this.loadContent = true;
  }

  get f() { return this.form.controls; }


  public resetForm() {
    this.setForm();
    this.multiSelect.toggleSelectAll();
  }

  public onFilterChange(item: any) {
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    var state = this.coronaService.getDailyStatesConfirmedCasesByState(item.item_text)
    this.lineChartData.push(state)
  }
  public onDeSelect(item: any) {
    for(var i=0; i < this.lineChartData.length; i++) {
      if(item.item_text == this.lineChartData[i].label) {
        this.lineChartData.splice(i, 1)
        return
      }
    }
  }

  public onSelectAll(items: any) {
    this.lineChartData = this.coronaService.getDailyStatesConfirmedCases()
  }
  public onDeSelectAll(items: any) {
    this.lineChartData = []
  }



}