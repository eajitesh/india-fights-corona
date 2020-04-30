import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB5snKZfONOZMiXrSKhUac_RVMWRJyVHqg",
  authDomain: "india-fights-corona.firebaseapp.com",
  databaseURL: "https://india-fights-corona.firebaseio.com",
  projectId: "india-fights-corona",
  storageBucket: "india-fights-corona.appspot.com",
  messagingSenderId: "111875641053",
  appId: "2:111875641053:web:a4284b4c99e329d5",
  measurementId: "UA-162024432-1"
};


@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  exports: [
    AngularFirestoreModule
  ]
})
export class AppFirebaseModule { }