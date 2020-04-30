import { Component, OnInit } from '@angular/core';
import { CoronaImageService } from '../corona-image-service.service';

@Component({
  selector: 'app-corona-photos-india',
  templateUrl: './corona-photos-india.component.html',
  styleUrls: ['./corona-photos-india.component.css']
})
export class CoronaPhotosIndiaComponent implements OnInit {

  coronaImages = []
  totalImages = 0

  constructor(private coronaImageService: CoronaImageService) { }

  ngOnInit() {
    var  images = this.coronaImageService.getCoronaImages();
    for(var i = 0; i < images.length; i++) {      
      // this.coronaImages[i] = images[i]
      // images[i].subscribe(obj => {
      //   if(obj) {
      //     this.coronaImages.push(obj)
      //     // this.coronaImages.push({
      //     // label: obj.label,
      //     // url: obj.img
      //   //})
      //   }        
      // })
    
      images[i].img.subscribe(url=>{
        if(url){
          this.coronaImages.push({url: url})          
          this.totalImages++
        }
      })
    
    }
  }
}