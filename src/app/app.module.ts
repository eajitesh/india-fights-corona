import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { NgxTickerModule } from './ngx-ticker/ngx-ticker.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './index/hello.component';
import { TravellersComponent } from './travellers/travellers.component';
import { IndexComponent } from './index/index.component';
import { HelplineComponent } from './helpline/helpline.component';
import { TestingCentersComponent } from './testing-centers/testing-centers.component';
import { DailyLineChartComponent } from './daily-line-chart/daily-line-chart.component';
import { WeeklyLineChartComponent } from './weekly-line-chart/weekly-line-chart.component';
import { MonthlyLineChartComponent } from './monthly-line-chart/monthly-line-chart.component';
import { NewsTickerComponent } from './news-ticker/news-ticker.component';
import { CoronaWarriorsComponent } from './corona-warriors/corona-warriors.component';
import { CoronaInfoComponent } from './corona-info/corona-info.component';
import { DailyHistogramComponent } from './daily-histogram/daily-histogram.component';
import { CoronaInfoService } from './corona-info.service';
import { CoronaNewsService } from './corona-news.service';
import { IndiaVsCoronaComponent } from './india-vs-corona/india-vs-corona.component';
import { ComparisonRecoveredRateComponent } from './comparison-recovered-rate/comparison-recovered-rate.component';
import { ComparisonMortalityRateComponent } from './comparison-mortality-rate/comparison-mortality-rate.component';
import { ComparisonInfectedRateComponent } from './comparison-infected-rate/comparison-infected-rate.component';
import { ComparisonDataService } from './comparison-data.service';
import { DailyStatesComponent } from './daily-states/daily-states.component';
import { DailyStatesRecoveredComponent } from './daily-states-recovered/daily-states-recovered.component';
import { IndianStatesService } from './indian-states.service';
import { EverydayLineChartComponent } from './everyday-line-chart/everyday-line-chart.component';
import { CoronaFunComponent } from './corona-fun/corona-fun.component';
import { DailyRocComponent } from './daily-roc/daily-roc.component';
import { DailyStatesConfirmedCasesComponent } from './daily-states-confirmed-cases/daily-states-confirmed-cases.component';
import { IndiaDailyDischargedDeathComponent } from './india-daily-discharged-death/india-daily-discharged-death.component';
import { CoronaPhotosIndiaComponent } from './corona-photos-india/corona-photos-india.component';
import { ImageServiceService } from './image-service.service';
import { DailyStateHistogramComponent } from './daily-state-histogram/daily-state-histogram.component';
import { DailyStatesDeathComponent } from './daily-states-death/daily-states-death.component';
import { IndiaDailyDischargedDeathRatioComponent } from './india-daily-discharged-death-ratio/india-daily-discharged-death-ratio.component';
import { RecoveryRateComponent } from './recovery-rate/recovery-rate.component';
import { StatesConfirmedPieComponent } from './states-confirmed-pie/states-confirmed-pie.component';
import { DaysToDoubleComponent } from './days-to-double/days-to-double.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CoronaImageService } from './corona-image-service.service';
import { CoronaDataService } from './corona-data.service';
import { RecoveryStatusStatesComponent } from './recovery-status-states/recovery-status-states.component';
import { TestingPositiveRateComponent } from './testing-positive-rate/testing-positive-rate.component';
import { CumulativeDeathsStatesComponent } from './cumulative-deaths-states/cumulative-deaths-states.component';


const appRoutes: Routes = [
  { path: 'travellers', component: TravellersComponent },
  { path: 'index', component: IndexComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'testing-centres', component: TestingCentersComponent },
  { path: 'get-relief', component: CoronaWarriorsComponent },
  { path: 'info', component: CoronaInfoComponent },
  { path: 'india-fights-corona', component: IndiaVsCoronaComponent },
  { path: 'corona-fun', component: CoronaFunComponent },
  { path: 'corona-photos-india', component: CoronaPhotosIndiaComponent },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  ReactiveFormsModule, ChartsModule, NgxTickerModule,  NgMultiSelectDropDownModule,

    AngularFirestoreModule,
    AngularFireDatabaseModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp({     
      apiKey: "AIzaSyB5snKZfONOZMiXrSKhUac_RVMWRJyVHqg",
      authDomain: "india-fights-corona.firebaseapp.com",
      databaseURL: "https://india-fights-corona.firebaseio.com",
      projectId: "india-fights-corona",
      storageBucket: "india-fights-corona.appspot.com",
      messagingSenderId: "111875641053",
      appId: "2:111875641053:web:a4284b4c99e329d5",
      measurementId: "UA-162024432-1"
    }),
  
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
     )
  
   ],
  declarations: [ AppComponent, HelloComponent, TravellersComponent, IndexComponent, HelplineComponent, TestingCentersComponent, DailyLineChartComponent, WeeklyLineChartComponent, MonthlyLineChartComponent, NewsTickerComponent, CoronaWarriorsComponent, CoronaInfoComponent, DailyHistogramComponent, IndiaVsCoronaComponent, ComparisonRecoveredRateComponent, ComparisonMortalityRateComponent, ComparisonInfectedRateComponent, DailyStatesComponent, DailyStatesRecoveredComponent, EverydayLineChartComponent, CoronaFunComponent, DailyRocComponent, DailyStatesConfirmedCasesComponent, IndiaDailyDischargedDeathComponent, CoronaPhotosIndiaComponent, DailyStateHistogramComponent, DailyStatesDeathComponent,  IndiaDailyDischargedDeathRatioComponent, RecoveryRateComponent, StatesConfirmedPieComponent, DaysToDoubleComponent, RecoveryStatusStatesComponent, TestingPositiveRateComponent, CumulativeDeathsStatesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CoronaInfoService, CoronaNewsService, ComparisonDataService, IndianStatesService, ImageServiceService, CoronaImageService, CoronaDataService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
