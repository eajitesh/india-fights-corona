import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class ComparisonDataService {

  dailyComparisonByCountry = [
    
    // { data:[1300,1700,3500,7100,10400,15200,31200,42200,51900,63600,68300,85200,103300,122700,140600], label: 'USA', fill: false},
    { data:[1000,1600,2100,3000,4200,5800,7800,9200,11200,13700,17100,20000,24900,28800,35100, 
    39900, 49500, 57800, 65700, 73200, 80100, 88000, 95900, 104100, 112100,
    119200, 126200, 131600, 136700, 141900, 148200, 153200, 158300, 163000, 166800, 170100, 172500, 177600, 184900, 190800, 191700, 198600, 200200, 202100, 205900], label: 'Spain', fill: false},
    { data:[1100,1700,2000,2500,3100,3900,4600,5900,7400,9200,10100,12500,15100,17700,21200,
    24700, 28000, 31500, 35700, 41000, 47000, 53600, 59100, 63900, 69200,
    74400, 80600, 86500, 92500, 97700, 105800, 110600, 115200, 119800, 124600, 128900, 132500, 135400, 139400, 143600, 147600, 152200, 156300, 159500, 162500], label: 'Italy', fill: false},
    { data:[1100,1300,1600,3100,3800,4800,6000,7200,8200,11000,18300,21500,24800,29200,33000,
    37300,43900,50900,57700,62100, 66900, 71800, 77900, 84800, 91200,
    96100, 100100, 103300, 107700, 113300, 118200, 122200, 124900, 127900, 130100, 131400, 134800, 137700, 141400, 143300, 145700, 147000, 148300, 150600, 153100],  label: 'Germany', fill: false},
    { data:[1300,2000,2800,4500,6000,7700,9700,11800,14400,17200,20500,24400,28100,31200,34600,
    36800, 39800, 42400, 44400, 44800, 55900, 66400, 68400, 70500, 72400, 
    74200, 74600, 75100, 75500, 77000, 77200, 77800, 78200, 78600, 78900, 79400, 79900, 80100, 80300, 80400, 80500, 80700, 80800, 80800, 80860], label: 'China', fill: false},
    { data:[1300,1800,2300,3100,3700,4200,4800,5300,5800,6300,6800,7100,7500,7800,8000,
    8100, 8200, 8300, 8400, 8600, 8700, 8800, 9000, 9000, 9000,
    9100, 9200, 9300, 9400, 9500, 9600, 9700, 9800, 9900, 10000, 10100, 10200, 10300, 10400, 10400, 10420, 10450, 10480, 10510, 10540], label: 'South Korea', fill: false, borderColor: 'green'},
    { data:[1100,1200,1800,2300,3700,4500,6700,9100,11000,12800,14500,16200,20100,22600,25600,
    29600, 33400, 38100, 40700, 45200, 52800, 57700, 59900, 65200, 69500,
    71400, 75300, 79200, 83100, 87400, 91700, 94900, 121700, 130400, 133600, 146100, 148100, 153000, 155400, 158200, 155900, 158300, 160000, 161600, 162200], label: 'France', fill: false},
    { data:[1100,1300,1600,1900,2300, 2600, 3100, 3600, 4300, 4800, 
    5300, 5900, 6800, 7500, 8400, 9400, 10800, 11900, 12800, 13800, 14800, 16100, 17700, 19000, 
    20500, 21700, 23400, 25000, 26900, 28400, 30000, 31800, 33600, 35400, 37700, 40300, 42800, 46700, 49400, 52952, 56300, 59700, 62900, 67100, 7000], label: 'India', fill: false, borderColor:'red'},
    { data:[1000,1100,1200,1300,1400, 1500, 1700, 1900, 2000, 2200, 
    2500, 2600, 3100, 3700, 3900, 4300, 4700, 5500, 6000, 6700, 7400, 7600, 8100, 8600,
    9800, 10300, 10800, 10800, 11100, 11500, 12400, 12800, 13200, 13400, 14100, 14200, 14300, 14400, 14600, 14800, 15000, 15200, 15500, 15600], label: 'Japan', fill: false, borderColor:'black'},
    // { data:[1100,1300,1600,1900,2300, 2600, 3100, 3600, 4300, 4800, 
    // 5300, 5900, 6800, 7500, 8400, 9400, 10800, 11900, 11900], label: 'Singapore', fill: false},
    
  ];

  dayCount = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

  constructor() { }

  getDailyComparisonByCountry() {
    return this.dailyComparisonByCountry
  }

  getDayCountInfo() {
    return this.dayCount
  }

}