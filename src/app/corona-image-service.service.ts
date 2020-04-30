import { Injectable } from '@angular/core';

// import { AngularFireDatabase, AngularFireList, AngularireObject } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

import { of } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class CoronaImageService {

  private firebasestorage: any;
  constructor(private storage: AngularFireStorage) { 
      this.firebasestorage = storage;
  }

  getCoronaImages() {
    var pr1 = this.firebasestorage.ref('images/india_gate_small.png');
    var pr2 = this.firebasestorage.ref('images/mumbai_cst_small.png');
    var pr3 = this.firebasestorage.ref('images/delhi_india_gate_small.png');
    var pr4 = this.firebasestorage.ref('images/bhopal_small.png');
    var pr5 = this.firebasestorage.ref('images/ahmedabad_small.png');

    var images = [];

    // images.push(new Promise(function(resolve, reject) {
    //   resolve({ img: pr1.getDownloadURL() , label: 'Mumbai India Gate'}); // immediately give the result: 123
    // }))

    // images.push(of({ img: pr1.getDownloadURL() , label: 'Mumbai India Gate'}));
    images.push({ img: pr1.getDownloadURL() , label: 'Mumbai India Gate'});
    images.push({ img: pr2.getDownloadURL() , label: 'Mumbai CST'});
    images.push({ img: pr3.getDownloadURL() , label: 'Delhi India Gate'});
    images.push({ img: pr4.getDownloadURL() , label: 'Deserted Bhopal'});
    images.push({ img: pr4.getDownloadURL() , label: 'Sanitized Ahmedabad'});

    return images
  }

}