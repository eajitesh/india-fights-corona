import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class CoronaInfoService {

  totalInfected = 37336; //35365//33610//31787//29974//28380//26917//24942//23452//21700//20471//18985//17656//16116//14792//13835//12759//11933//10815//9352//8447//7529//6761//5865//5274//4789//4281//3578//3076//2590//2341 //1944//1595
  totalDeath = 1218; //1152//1075//1008//937//886//826//779//723//686//652//603//550//519//488//452//420//392//353//324//273//242//206//169//149//124//111//89//77//71//68//55//46
  totalDischarged = 9951; //9065//8373//7797//7027//6362//5914//5210//4814//4325//3960//3260//2842//2302//2015//1767//1515//1344//1190//980//765//652//515//478//411//353//319//280//237//190//177//159 //150
  lastUpdated = '9:38 AM 2 May'

  // Discharged , Death 
  //
  // TODO: Update total number of discharged and death cases that happened yesterday
  // TODO: Update today's date
  //
  dailyDischargedDeathCases = [
    { data: [150, 159, 177, 190, 237, 280, 319, 353, 411, 478, 515, 652, 765, 980, 1190, 1344, 1515, 1767, 2015, 2302, 2842, 3260, 3960, 4325, 5063, 5210, 5914, 6362, 7027, 7797, 8373, 9065], label: 'Discharged', fill: false, borderColor: 'green' },
    { data: [46, 55, 68, 71, 77, 89, 111, 124, 149, 169, 206, 242, 273, 324, 353, 392, 420, 452, 488, 519, 559, 603, 652, 686, 775, 779, 826, 886, 937, 1008, 1075, 1152], label: 'Death', fill: false, borderColor: 'red' },
  ];
  dailyInfoDischargedDeath = ['31/03', '01/04', '02/04', '03/04', '04/04', '05/04', '06/04', 
  '07/04', '08/04', '09/04', '10/04', '11/04', '12/04', '13/04', '14/04', '15/04', '16/04', '17/04', '18/04', '19/04', '20/04',
  '21/04', '22/04', '23/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '01/05', '02/05'];
  // Daily Line Chart (Cumulative)
  //
  // TODO: Update total number of cases (cumulative) that happened yesterday
  // TODO: Update today's date
  //
  dailyInfectedCasesHistory = [44, 60, 74, 81, 82, 107, 114, 140, 170, 198, 249, 329, 
                                391, 468, 519, 606, 694, 820, 983, 1109, 1266, 1595, 1944, 2341, 
                                2590, 3076, 3578, 4281, 4789, 5274, 5865, 6761, 7529, 8447, 9352, 10815, 11933, 12759,
                                13835, 14792, 16116, 17656, 18985, 20471, 21700, 23452, 24942, 26917, 28380, 29974, 31787, 33610, 35365];
  dailyInfo = ['10/03', '11/03', '12/03', '13/03', '14/03', '15/03', '16/03', '17/03', '18/03', '19/03', '20/03', '21/03', '22/03', '23/03',  '24/03', '25/03', '26/03', '27/03', '28/03', '29/03',  '30/03', '31/03', '01/04', 
  '02/04', '03/04', '04/04', '05/04', '06/04', '07/04', '08/04', '09/04', '10/04', 
  '11/04', '12/04', '13/04', '14/04', '15/04', '16/04', '17/04', '18/04', '19/04', '20/04', '21/04', '22/04', '23/04', '24/04', 
  '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '01/05', '02/05'];
  
  // Monthly Line Chart
  //
  // Update total number of cases that happened last month
  // TODO: Update once on 1st of every month
  //
  monthlyInfectedHistory = [1, 2, 1592, 32015];
  monthsInfo = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // Weekly Line Chart
  //
  // TODO: Update total number of cases that happened last week
  // Last Week Cumulative: 26917
  // 
  weeklyInfectedHistory = [3, 31, 73, 234, 768, 2469, 4869, 7669, 10801];
  weeksInfo = ['24 Feb', '2 Mar', '9 Mar', '16 Mar', '23 Mar', '30 Mar', '6 Apr', '13 Apr', '20 Apr', '27 Apr'];

  // Daily Histogram Chart
  //
  // TODO: Update total number of cases upto yesterday (Cumulative)
  //
  totalInfectedTillYesterday = 35365;//35365//33610//31787//29974//28380//26917//24942//23452//21700//20471//18985//17656//16116//14792//13835//12759//11933//10815//9352//8447//7529//6761//5865//5274//4789//4281//3578//3076//2590//2341//1944//1595
  // 
  // TODO: Update total number of cases that happened yesterday
  //
  dailyInfectedHistogramHistory = [1, 16, 14, 7, 1, 25, 
    7, 26, 30, 28, 51, 80, 62, 78, 51, 87, 88, 126, 163, 126, 157, 329, 349, 397, 249, 
    486, 502, 703, 508, 485, 591, 896, 768, 918, 905, 1463, 1118, 826, 1076, 957, 1324,
    1329, 1486, 1229, 1752, 1490, 1975, 1463, 1594, 1813, 1823, 1755];

  //
  // No. of days took to double the infected dailyCases
  // 250, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000
  //
  doubleDaysCount = ['250', '500', '1000', '2000', '4000', '8000', '16000', '32000'];
  daysTookToDouble = [4, 4, 4, 4, 5, 6, 8, 11];

  dailyTestingStatus = [
    { data: [69245, 274599, 401586, 462621, 716733, 770764], label: 'Testing'}, 
    { data: [2753, 11297, 17615, 18985, 29500, 31332], label: 'Positive Cases'}, 
  ];
  dailyTestingInfo = ['03/04', '15/04', '19/04', '21/04', '28/04', '29/04'];

  constructor() { }

  getInfected() {
    return this.totalInfected
  }
  getDeaths() {
    return this.totalDeath
  }
  getDischarged() {
    return this.totalDischarged
  }
  getLastUpdated() {
    return this.lastUpdated
  }
  getDailyInfectedHistogramHistory() {
    return this.dailyInfectedHistogramHistory
  }
  getInfectedTillYesterday() {
    return this.totalInfectedTillYesterday
  }
  getDailyInfectedHistory() {
    return this.dailyInfectedCasesHistory
  }
  getDailyInfo() {
    return this.dailyInfo
  }
  getWeeklyInfectedHistory() {
    return this.weeklyInfectedHistory
  }
  getWeeksInfo() {
    return this.weeksInfo
  }
  getWeeklyInfectedHistoryTotal() {
    return this.weeklyInfectedHistory.reduce(function(a, b) { return a + b; }, 0);
  }
  getMonthlyInfectedHistory() {
    return this.monthlyInfectedHistory
  }
  getMonthlyInfectedHistoryTotal() {
    return this.monthlyInfectedHistory.reduce(function(a, b) { return a + b; }, 0);
  }
  getMonthsInfo() {
    return this.monthsInfo
  }
  getActiveCases() {
    return this.totalInfected - this.totalDeath - this.totalDischarged
  }
  getDailyROC() {
    var dailyROC = [];
    for (var i = 0; i < this.dailyInfectedCasesHistory.length; i++) {
      if (i < this.dailyInfectedCasesHistory.length - 1) {
        var roc = Math.round(((this.dailyInfectedCasesHistory[i+1]/this.dailyInfectedCasesHistory[i]) - 1)*100)
        dailyROC.push(roc)
      }
    }
    return dailyROC
  }
  getROCDayInfo() {
    var dailyROC = [];
    for (var i = 1; i < this.dailyInfo.length; i++) {
      dailyROC.push(this.dailyInfo[i])
    }
    return dailyROC;
  }
  getDailyDischargedDeathCases() {
    var dailyCases = [];
    for(var i = 0; i < this.dailyDischargedDeathCases.length; i++) {
      dailyCases[i] = this.dailyDischargedDeathCases[i]
      if(this.dailyDischargedDeathCases[i].label == 'Discharged') {
        dailyCases[i].data.push(this.totalDischarged)
      } else
      if(this.dailyDischargedDeathCases[i].label == 'Death') {
        dailyCases[i].data.push(this.totalDeath)
      }
    }
    return dailyCases;
  }
  getDailyInfoDischargedDeathInfo() {
    return this.dailyInfoDischargedDeath
  }

  
  getDailyDischargedDeathRatio() {
    var dailyRatio = [];
    for(var i = 0; i < this.dailyDischargedDeathCases[0].data.length; i++) {
      var ratio = (this.dailyDischargedDeathCases[0].data[i]/this.dailyDischargedDeathCases[1].data[i]).toFixed(2)
      dailyRatio.push(ratio)
    }
    return dailyRatio;
  }

  getRecoveryRate() {
    var dailyRatio = [];
    for(var i = 0; i < this.dailyDischargedDeathCases[0].data.length; i++) {
      var ratio = ((this.dailyDischargedDeathCases[0].data[i]/this.dailyInfectedCasesHistory[i+20])*100).toFixed(2)
      dailyRatio.push(ratio)
    }
    return dailyRatio;
  }

  getTestingRate() {
    var dailyRatio = []
    for(var i = 0; i < this.dailyTestingStatus[0].data.length; i++) {
      var ratio = ((this.dailyTestingStatus[1].data[i]/this.dailyTestingStatus[0].data[i])*100).toFixed(2)
      console.log('Ratio: ' + ratio)
      dailyRatio.push(ratio)
    }
    return dailyRatio
  }

  getTestingDayInfo() {
    return this.dailyTestingInfo
  }

  getDoubleDaysCount() {
    return this.doubleDaysCount
  }

  getDaysTookToDouble() {
    return this.daysTookToDouble
  }

}