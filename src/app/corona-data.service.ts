import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { TestingCenters } from './testing-centers';


@Injectable({
   providedIn: 'root',
})
export class CoronaDataService {

  constructor(private firestore: AngularFirestore) { }

  getTestingCenters() {
    return this.firestore.collection('testing-centers').snapshotChanges();
  }

}