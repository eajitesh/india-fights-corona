import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class ImageServiceService {

  constructor() { }

  public getMediaURL(image): firebase.Promise<any> {
    const storageRef = this.firebaseApp.storage().ref().child(image);
    return storageRef.getDownloadURL().then(url => {
        console.log('firebase response: ' + url);
        return url;
    });
}

}