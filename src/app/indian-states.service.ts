import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})


export class IndianStatesService {

  dailyConfirmedCases = [
    { data: [126, 224, 285, 329, 418, 497, 665, 764, 837, 918, 980, 1147, 1444, 1480, 1695, 1819, 2223, 2295,
    2342, 2419, 2539, 2766, 2888, 3031, 3125, 3279, 3437, 3652, 3796, 4133, 4365, 4629, 4805, 4917], label: 'North Zone', fill: false },
    { data: [422, 493, 598, 799, 958, 1047, 1169, 1409, 1598, 1768, 1948, 2070, 2240, 2392, 2472, 2710, 2925, 3036,
    3195, 3348, 3503, 3624, 3791, 4042, 4230, 4390, 4562, 4774, 4914, 5085, 5243, 5461, 5577, 5867], label: 'South', fill: false, borderColor: 'red'  },
    { data: [35, 42, 55, 71, 86, 108, 134, 163, 167, 200, 215, 230, 267, 286, 304, 327, 374, 417,
    440, 478, 518, 545, 598, 679, 730, 790, 890, 1007, 1087, 1171, 1321, 1389, 1439, 1525], label: 'East', fill: false },
    { data: [256, 289, 381, 427, 508, 521, 602, 619, 899, 1040, 1190, 1321, 1612, 1889, 2200, 2531, 2961, 3389,
    3797, 4233, 4602, 5262, 6061, 6742, 7500, 8066, 9061, 9639, 10706, 11376, 12145, 13069, 14004, 14900], label: 'West', fill: false, borderColor: 'blue' },
    { data: [179, 218, 276, 318, 370, 418, 506, 623, 780, 863, 941, 1097, 1198, 1482, 1776, 1965, 2332, 2797,
    2986, 3358, 3631, 3920, 4219, 4492, 4887, 5176, 5503, 5848, 6109, 6396, 6761, 7132, 7226, 7544], label: 'Central', fill: false },
  ];

  dailyRecoveredCases =  [
    { data: [22, 28, 30, 33, 35, 38, 47, 58, 64, 73, 76, 77, 88, 88, 88, 106, 124, 138, 181, 198, 223, 281, 
    507, 711, 912, 1067, 1167, 1236, 1277, 1314, 1350, 1592, 1641, 1670], label: 'North Zone', fill: false  },
    { data: [30, 31, 48, 51, 57, 64, 79, 102, 111, 128, 155, 174, 190, 259, 288, 410, 446, 514, 569, 740, 872, 968,
    1088, 1162, 1415, 1479, 1638, 1788, 2000, 2079, 2247, 2414, 2467, 2609], label: 'South', fill: false  },
    { data: [0, 0, 3, 3, 9, 10, 10, 12, 12, 15, 15, 19, 19, 19, 51, 68, 81, 85, 96, 114, 124, 137, 
    152, 162, 172, 188, 213, 214, 222, 241, 252, 272, 281, 314], label: 'East', fill: false  },
    { data: [26, 35, 45, 45, 49, 52, 56, 60, 78, 81, 104, 142, 151, 219, 257, 269, 289, 323, 364, 380, 425, 465, 
    620, 710, 873, 975, 1105, 1229, 1365, 1508, 1683, 1829, 2127, 2393], label: 'West', fill: false, borderColor: 'blue'  },
    { data: [16, 19, 24, 26, 26, 26, 45, 45, 54, 56, 61, 66, 67, 67, 81, 127, 248, 284, 305, 335, 371, 451, 
    476, 515, 588, 616, 691, 743, 1050, 1220, 1495, 1690, 1809, 1903], label: 'Central', fill: false  },
  ];

  dailyDeathCases =  [
    { data: [14, 16, 17, 17, 18, 22, 26, 32, 33, 38, 43, 48, 67, 51, 59, 64, 68, 70, 72, 72, 73, 75, 79, 81, 82, 83, 85, 87, 90], label: 'North Zone', fill: false  },
    { data: [16, 16, 19, 21, 21, 24, 26, 29, 31, 33, 43, 49, 53, 62, 63, 64, 65, 75, 80, 85, 89, 96, 101, 102, 105, 105, 106, 109, 109], label: 'South', fill: false  },
    { data: [4, 4, 4, 4, 5, 7, 7, 8, 9, 9, 12, 12, 13, 13, 16, 17, 19, 19, 19, 23, 23, 23, 26, 26, 28, 28, 30, 30, 41], label: 'East', fill: false  },
    { data: [25, 28, 35, 57, 61, 77, 88, 114, 129, 149, 175, 186, 208, 223, 232, 249, 269, 290, 309, 346, 372, 395, 428, 456, 493, 531, 581, 629, 673], label: 'West', fill: false, borderColor: 'blue'  },
    { data: [10, 10, 10, 12, 19, 19, 23, 23, 40, 44, 51, 58, 67, 69, 82, 94, 98, 105, 121, 126, 129, 134, 145, 161, 178, 190, 206, 219, 234], label: 'Central', fill: false  },
  ];

  dailyInfo = ['29/03', '30/03', '31/03', '01/04', '02/04',  '03/04', '04/04', 
  '05/04', '06/04', '07/04', '08/04', '09/04', '10/04', '11/04', '12/04', '13/04', '14/04', '15/04', '16/04', '17/04',
  '18/04', '19/04', '20/04', '21/04', '22/04', '23/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '01/05'];
  dailyDeathInfo = ['03/04', '04/04', 
  '05/04', '06/04', '07/04', '08/04', '09/04', '10/04', '11/04', '12/04', '13/04', '14/04', '15/04', '16/04', '17/04',
  '18/04', '19/04', '20/04', '21/04', '22/04', '23/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04', '30/04', '01/05'];

  dailyMaharashtra =    [193, 215, 302, 335, 416, 420, 490, 490, 748, 868, 1018, 1135, 1364, 1574, 1761, 1985, 2337, 
  2687, 2919, 3205, 3323, 3651, 4203, 4669, 5221, 5652, 6430, 6817, 7628, 8068, 8590, 9318, 9915, 10498];
  dailyMaharashtraRec = [1593, 1773]
  dailyMaharashtraDth = [432, 459]
  dailyKerala = [194, 234, 241, 265, 286, 286, 295, 306, 314, 327, 336, 345, 357, 364, 374, 376, 379, 
  387, 388, 395, 396, 400, 402, 408, 427, 438, 448, 451, 458, 469, 482, 486, 495, 497];
  dailyKeralaRec = [369, 383]
  dailyKeralaDth = [4, 4]
  dailyUP =  [75, 88, 101, 108, 121, 126, 174, 227, 305, 305, 343, 410, 431, 433, 452, 483, 657, 
  735, 773, 846, 969, 1084, 1176, 1294, 1412, 1509, 1604, 1778, 1843, 1955, 2033, 2115, 2134, 2203];
  dailyUPRec = [510, 513]
  dailyUPDth = [39, 39]
  dailyKarnataka =      [80, 88, 101, 110, 110, 124, 128, 144, 151, 175, 175, 181, 197, 214, 226, 247, 258, 
  277, 315, 353, 371, 384, 395, 415, 425, 443, 463, 489, 503, 511, 520, 535, 565];
  dailyKarnatakaRec = [216, 229]
  dailyKarnatakaDth = [21, 21]
  dailyDelhi =          [53, 72, 120, 152, 219, 295, 445, 503, 523, 576, 576, 669, 898, 903, 1069, 1154, 1510, 
  1561, 1578, 1640, 1707, 1893, 2003, 2081, 2156, 2248, 2376, 2514, 2625, 2918, 3108, 3314, 3439, 3515];
  dailyDelhiRec = [1092, 1094]
  dailyDelhiDth = [56, 59]
  dailyTelangana =      [69, 70, 77, 92, 97, 154, 159, 269, 321, 364, 427, 442, 473, 504, 504, 562, 624, 
  647, 698, 743, 791, 844, 873, 919, 945, 960, 984, 984, 991, 1002, 1004, 1012, 1012, 1038];  
  dailyTelenganaRec = [367, 397]
  dailyTelenganaDth = [26, 26]
  dailyGujarat =        [58, 69, 74, 87, 87, 88, 105, 122, 144, 165, 165, 179, 241, 308, 432, 539, 617, 
  695, 871, 1021, 1272, 1604, 1851, 2066, 2272, 2407, 2624, 2815, 3071, 3301, 3548, 3744, 4082, 4395];
  dailyGujaratRec = [527, 613]
  dailyGujaratDth = [197, 214]
  dailyTN =             [50, 67, 124, 234, 309, 309, 411, 485, 571, 621, 690, 738, 834, 911, 969, 1075, 1173, 
  1204, 1242, 1267, 1323, 1372, 1477, 1520, 1596, 1629, 1683, 1755, 1821, 1885, 1937, 2058, 2162, 2323];
  dailyTNRec = [1210, 1258]
  dailyTNDth = [27, 27]
  dailyRajasthan =      [57, 69, 93, 108, 133, 154, 200, 200, 274, 288, 328, 383, 463, 553, 700, 812, 879, 
  1005, 1023, 1131, 1229, 1351, 1478, 1576, 1801, 1890, 1964, 2034, 2083, 2185, 2262, 2364, 2438, 2584];
  dailyRajasthanRec = [769, 836]
  dailyRajasthanDth = [51, 58]
  dailyMP =             [33, 47, 66, 86, 100, 107, 107, 165, 165, 229, 229, 259, 259, 443, 564, 604, 730, 
  987, 1120, 1308, 1355, 1407, 1485, 1540, 1592, 1695, 1852, 1952, 2096, 2168, 2368, 2561, 2561, 2660];
  dailyMPRec = [461, 482]
  dailyMPDth = [129, 137]
  dailyJK =             [31, 49, 55, 62, 70, 75, 92, 106, 109, 116, 116, 158, 184, 207, 224, 245, 270, 
  278, 300, 314, 328, 341, 350, 368, 380, 407, 427, 454, 494, 523, 546, 565, 581, 614];
  dailyJKRec = [192, 216]
  dailyJKDth = [8, 8]
  dailyPunjab =         [38, 39, 41, 44, 46, 46, 57, 57, 76, 91, 91, 101, 132, 132, 151, 167, 176, 
  186, 186, 186, 202, 219, 219, 245, 251, 277, 277, 298, 298, 313, 313, 322, 357, 357];
  dailyPunjabRec = [90, 90]
  dailyPunjabDth = [19, 19]
  dailyHaryana =        [33, 35, 40, 40, 47, 47, 49, 59, 84, 90, 147, 169, 169, 177, 185, 185, 199, 
  199, 205, 205, 225, 233, 233, 254, 254, 262, 272, 272, 289, 289, 296, 310, 310, 313];
  dailyHaryanaRec = [209, 209]
  dailyHaryanaDth = [3, 3]
  dailyAP =             [19, 23, 44, 87, 143, 161, 161, 190, 226, 266, 305, 348, 363, 381, 381, 432, 473, 
  503, 534, 572, 603, 603, 722, 757, 813, 895, 955, 1061, 1097, 1177, 1259, 1332, 1332, 1403];
  dailyAPRec = [287, 321]
  dailyAPDth = [31, 31]
  dailyWB =             [19, 22, 27, 27, 37, 37, 69, 80, 80, 91, 99, 103, 116, 126, 134, 152, 190, 
  213, 231, 255, 287, 310, 339, 392, 423, 456, 514, 571, 611, 649, 697, 725, 758, 795];
  dailyWBRec = [124, 139]
  dailyWBDth = [22, 33]
  dailyBihar =          [11, 15, 21, 24, 24, 29, 30, 30, 32, 32, 38, 39, 60, 60, 64, 64, 66, 
  70, 74, 83, 85, 86, 96, 114, 126, 148, 176, 228, 251, 277, 345, 383, 392, 418];
  dailyBiharRec = [65, 82]
  dailyBiharDth = [2, 2]
  dailyOdisha =         [3, 3, 3, 4, 4, 5, 5, 20, 21, 42, 42, 42, 44, 48, 54, 54, 55, 
  60, 60, 60, 60, 61, 68, 74, 82, 83, 90, 94, 103, 108, 118, 125, 341];
  dailyOdishaRec = [39, 39]
  dailyOdishaDth = [1, 1]

  dailyChandigarh =     [28, 30, 30, 40, 56, 56];
  dailyChandigarhRec = [17, 17]
  dailyChandigarhDth = [0, 0]
  dailyChattisgarh =    [36, 37, 37, 37, 38, 40];
  dailyChattisgarhRec = [34, 36]
  dailyChattisgarhDth = [0, 0]
  dailyUttarakhand =    [48, 50, 51, 51, 55, 57];
  dailyUttarakhandRec = [36, 36]
  dailyUttarakhandDth = [0, 0]
  dailyGoa = [7, 7, 7, 7, 7, 7]
  dailyGoaRec = [7, 7]
  dailyGoaDth = [0, 0]
  dailyTripura = [2, 2, 2, 2, 2]
  dailyTripuraRec = [2, 2]
  dailyTripuraDth = [0, 0]
  dailyManipur = [2, 2, 2, 2, 2, 2]
  dailyManipurRec = [2, 2]
  dailyManipurDth = [0, 0]
  dailyArunachalPradesh = [1, 1, 1, 1, 1, 1]
  dailyArunachalPradeshRec = [1, 1]
  dailyArunachalPradeshDth = [0, 0]
  dailyAssam = [36, 36, 36, 38, 38, 42]
  dailyAssamRec = [29, 29]
  dailyAssamDth = [1, 1]


  dailyStates = [
      { data: this.dailyMaharashtra, label: 'Maharashtra', fill: false },
      { data: this.dailyKerala, label: 'Kerala', fill: false },
      { data: this.dailyUP, label: 'UP', fill: false },
      { data:  this.dailyKarnataka, label: 'Karnataka', fill: false },
      { data: this.dailyDelhi, label: 'Delhi', fill: false },
      { data: this.dailyTelangana, label: 'Telangana', fill: false },
      { data: this.dailyGujarat, label: 'Gujarat', fill: false },
      { data: this.dailyTN, label: 'Tamilnadu', fill: false },
      { data:  this.dailyRajasthan, label: 'Rajasthan', fill: false },
      { data: this.dailyMP, label: 'MP', fill: false },
      { data: this.dailyJK, label: 'J&K', fill: false },
      { data: this.dailyPunjab, label: 'Punjab', fill: false },
      { data: this.dailyHaryana, label: 'Haryana', fill: false },
      { data: this.dailyAP, label: 'AP', fill: false },
      { data: this.dailyWB, label: 'West Bengal' , fill: false},
      { data: this.dailyBihar, label: 'Bihar' , fill: false},
      { data: this.dailyOdisha, label: 'Odisha' , fill: false},
  ];

  dailyStatesRec = [
      { data: this.dailyMaharashtra, label: 'Maharashtra', fill: false, rec: this.dailyMaharashtraRec },
      { data: this.dailyKerala, label: 'Kerala', fill: false, rec: this.dailyKeralaRec },
      { data: this.dailyUP, label: 'UP', fill: false, rec: this.dailyUPRec },
      { data:  this.dailyKarnataka, label: 'Karnataka', fill: false, rec: this.dailyKarnatakaRec },
      { data: this.dailyDelhi, label: 'Delhi', fill: false, rec: this.dailyDelhiRec },
      { data: this.dailyTelangana, label: 'Telangana', fill: false, rec: this.dailyTelenganaRec },
      { data: this.dailyGujarat, label: 'Gujarat', fill: false, rec: this.dailyGujaratRec },
      { data: this.dailyTN, label: 'Tamilnadu', fill: false, rec: this.dailyTNRec },
      { data:  this.dailyRajasthan, label: 'Rajasthan', fill: false, rec: this.dailyRajasthanRec },
      { data: this.dailyMP, label: 'MP', fill: false, rec: this.dailyMPRec },
      { data: this.dailyJK, label: 'J&K', fill: false, rec: this.dailyJKRec },
      { data: this.dailyPunjab, label: 'Punjab', fill: false, rec: this.dailyPunjabRec },
      { data: this.dailyHaryana, label: 'Haryana', fill: false, rec: this.dailyHaryanaRec },
      { data: this.dailyAP, label: 'AP', fill: false, rec: this.dailyAPRec },
      { data: this.dailyWB, label: 'West Bengal' , fill: false, rec: this.dailyWBRec },
      { data: this.dailyBihar, label: 'Bihar' , fill: false, rec: this.dailyBiharRec },
      { data: this.dailyOdisha, label: 'Odisha' , fill: false, rec: this.dailyOdishaRec },
      { data: this.dailyChandigarh, label: 'Chandigarh' , fill: false, rec: this.dailyChandigarhRec },
      { data: this.dailyChattisgarh, label: 'Chattisgarh' , fill: false, rec: this.dailyChattisgarhRec },
      { data: this.dailyUttarakhand, label: 'Uttarakhand' , fill: false, rec: this.dailyUttarakhandRec },
      { data: this.dailyAssam, label: 'Assam' , fill: false, rec: this.dailyAssamRec },     
      { data: this.dailyArunachalPradesh, label: 'Arunachal Pradesh' , fill: false, rec: this.dailyArunachalPradeshRec },
      { data: this.dailyGoa, label: 'Goa' , fill: false, rec: this.dailyGoaRec },
      { data: this.dailyTripura, label: 'Tripura' , fill: false, rec: this.dailyTripuraRec },
      { data: this.dailyManipur, label: 'Manipur' , fill: false, rec: this.dailyManipurRec },
  ];

  dailyStatesDth = [
      { data: this.dailyMaharashtra, label: 'Maharashtra', fill: false, dth: this.dailyMaharashtraDth },
      { data: this.dailyKerala, label: 'Kerala', fill: false, dth: this.dailyKeralaDth },
      { data: this.dailyUP, label: 'UP', fill: false, dth: this.dailyUPDth },
      { data:  this.dailyKarnataka, label: 'Karnataka', fill: false, dth: this.dailyKarnatakaDth },
      { data: this.dailyDelhi, label: 'Delhi', fill: false, dth: this.dailyDelhiDth },
      { data: this.dailyTelangana, label: 'Telangana', dth: this.dailyTelenganaDth },
      { data: this.dailyGujarat, label: 'Gujarat', dth: this.dailyGujaratDth },
      { data: this.dailyTN, label: 'Tamilnadu', dth: this.dailyTNDth },
      { data:  this.dailyRajasthan, label: 'Rajasthan', dth: this.dailyRajasthanDth },
      { data: this.dailyMP, label: 'MP', fill: false, dth: this.dailyMPDth },
      { data: this.dailyJK, label: 'J&K', fill: false, dth: this.dailyJKDth },
      { data: this.dailyPunjab, label: 'Punjab', fill: false, dth: this.dailyPunjabDth },
      { data: this.dailyHaryana, label: 'Haryana', fill: false, dth: this.dailyHaryanaDth },
      { data: this.dailyAP, label: 'AP', fill: false, dth: this.dailyAPDth },
      { data: this.dailyWB, label: 'West Bengal' , fill: false, dth: this.dailyWBDth },
      { data: this.dailyBihar, label: 'Bihar' , fill: false, dth: this.dailyBiharDth },
      { data: this.dailyOdisha, label: 'Odisha' , fill: false, dth: this.dailyOdishaDth },
      { data: this.dailyChandigarh, label: 'Chandigarh' , fill: false, dth: this.dailyChandigarhDth },
      { data: this.dailyChattisgarh, label: 'Chattisgarh' , fill: false, dth: this.dailyChattisgarhDth },
      { data: this.dailyUttarakhand, label: 'Uttarakhand' , fill: false, dth: this.dailyUttarakhandDth },
      { data: this.dailyAssam, label: 'Assam' , fill: false, dth: this.dailyAssamDth },           
  ];

  // statesName = ['Maharasthra', 'Kerala', 'UP', 'Karnataka', 'Delhi', 'Telangana', 'Gujarat', 'Tamilnadu', 'Rajasthan',
  // 'MP', 'J&K', 'Punjab', 'Haryana', 'AP', 'West Bengal', 'Bihar', 'Odisha'];

  constructor() { }

  getDailyInfo() {
    return this.dailyInfo
  }

  getDailyDeathInfo() {
    return this.dailyDeathInfo
  }

  getDailyConfirmedCases() {
    return this.dailyConfirmedCases
  }

  getDailyRecoveredCases() {
    return this.dailyRecoveredCases
  }

  getDailyDeathCases() {
    return this.dailyDeathCases
  }

   getDailyStatesConfirmedCases() {
    return this.dailyStates
  }

  getDailyStatesConfirmedCasesMultiSelect() {
    var dailyStatesMS = [];
    for(var i = 0; i < this.dailyStates.length; i++) {
        var arr = [];
        arr['data'] = this.dailyStates[i].data
        arr['label'] = this.dailyStates[i].label
        arr['item_id'] = i+1
        arr['item_text'] = this.dailyStates[i].label

        dailyStatesMS.push(arr)
    }
    return dailyStatesMS
  }

  getDailyStatesConfirmedCasesByState(state) {
    for(var i = 0; i < this.dailyStates.length; i++) {
        if(this.dailyStates[i].label == state) {
          return this.dailyStates[i]
        }
    }
  }

   getLatestStatewiseConfirmedCases() {
     var latestStatewiseCases = [];
     for(var i = 0; i < this.dailyStates.length; i++) {
       var arr = [];
       arr[0] = this.dailyStates[i].label
       arr[1] = this.dailyStates[i].data[this.dailyStates[i].data.length - 1]
       latestStatewiseCases.push(arr)
     }
     return latestStatewiseCases
   }

   getLatestStatewiseConfirmedCasesCount() {
     var latestStatewiseCases = [];
     for(var i = 0; i < this.dailyStates.length; i++) {
       latestStatewiseCases.push(this.dailyStates[i].data[this.dailyStates[i].data.length - 1])
     }
     return latestStatewiseCases
   }

  getStatesName() {
    var states = [];
    for(var i = 0; i < this.dailyStates.length; i++) {
      states.push(this.dailyStates[i].label)
    }
    return states
  }

  getDailyInfoForState() {
    var dailyInfoForState = [];
    for(var i = 1; i < this.dailyInfo.length; i++) {
      dailyInfoForState.push(this.dailyInfo[i])
    }
    return dailyInfoForState
  }

  getDailyConfirmedCasesByState(state) {
    var currState = {};
    var currStateData = [];
    for(var i = 0; i < this.dailyStates.length; i++) {
        if(this.dailyStates[i].label == state) {
          currState = this.dailyStates[i]
          currStateData = this.dailyStates[i].data
        }
    }
    var dailyConfirmedCases = [];
    for(var i = 0; i < currStateData.length; i++) {
      if (i < currStateData.length - 1) {
        var change = currStateData[i+1] - currStateData[i]
        dailyConfirmedCases.push(change)
      }
    }
    return dailyConfirmedCases
  }

  getDailyROCByState(state) {
    var dailyROC = [];
    var currState = {};
    var currStateData = [];
    for(var i = 0; i < this.dailyStates.length; i++) {
        if(this.dailyStates[i].label == state) {
          currState = this.dailyStates[i]
          currStateData = this.dailyStates[i].data
        }
    }

    for (var i = 0; i < currStateData.length; i++) {
      if (i < currStateData.length - 1) {
        var roc = Math.round(((currStateData[i+1]/currStateData[i]) - 1)*100)
        dailyROC.push(roc)
      }
    }
    return dailyROC
  }

  getRecoveryStatusForStates() {
    var dailyROC = [];
    var dailyROCWithStates = [];
    var dailyStatusForStates = [];
    var dailyStatusLabels = [];
    for(var i = 0; i < this.dailyStatesRec.length; i++) {
        var rcstatus = Math.round((this.dailyStatesRec[i].rec[this.dailyStatesRec[i].rec.length - 1]/this.dailyStatesRec[i].data[this.dailyStatesRec[i].data.length - 1])*100)       
        dailyROCWithStates.push({rcstatus: rcstatus, label: this.dailyStatesRec[i].label})
    }
    // dailyROCWithStates = this._sortDailyROCWithStates(dailyROCWithStates);
    dailyROCWithStates.sort(this._compare)
    for(var i = 0; i < dailyROCWithStates.length; i++) {
      dailyStatusForStates.push(dailyROCWithStates[i].rcstatus)
      dailyStatusLabels.push(dailyROCWithStates[i].label)
    }

    dailyROC.push(dailyStatusForStates)
    dailyROC.push(dailyStatusLabels)
    
    return dailyROC
  }

  _sortDailyROCWithStates(drws) {
    var dailyROCWithStates = drws

    return dailyROCWithStates;
  }

  _compare(obj1, obj2) {
    if (obj1.rcstatus > obj2.rcstatus) return 1;
    if (obj2.rcstatus > obj1.rcstatus) return -1;

    return 0;
  }

  getCumulativeDeathForStates() {
    var dailyDth = [];   
    var dailyDthWithStates = [];
    var dailyStatusForStates = [];
    var dailyStatusLabels = [];
    for(var i = 0; i < this.dailyStatesDth.length; i++) {
        dailyDthWithStates.push({data: this.dailyStatesDth[i].dth, label: this.dailyStatesDth[i].label})
    }
    dailyDthWithStates.sort(this._compareDeaths)
    for(var i = 0; i < dailyDthWithStates.length; i++) {
      console.log("Data: " + dailyDthWithStates[i].data[dailyDthWithStates[i].data.length - 1])
      dailyStatusForStates.push(dailyDthWithStates[i].data[dailyDthWithStates[i].data.length - 1])
      dailyStatusLabels.push(dailyDthWithStates[i].label)
    }

    dailyDth.push(dailyStatusForStates)
    dailyDth.push(dailyStatusLabels)

    return dailyDth
  }

   _compareDeaths(obj1, obj2) {
    if (obj1.data[obj1.data.length - 1] > obj2.data[obj2.data.length - 1] ) return 1;
    if (obj2.data[obj2.data.length - 1] > obj1.data[obj1.data.length - 1] ) return -1;

    return 0;
  }

}