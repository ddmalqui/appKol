import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Authentication } from '../../../../services/authentication';

import { LoadingProvider } from '../../../../providers/loading/loading';


//https://ionicframework.com/docs/native/image-picker/

@IonicPage()
@Component({
    selector: 'google-card-layout-3',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout3 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    slider = {};
    files : any;

    imageURI:any;
    imageFileName:any;

    constructor(
    private authCtr: Authentication,
      private camera: Camera) { }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }


  fileChanges(ev){
    console.log(ev.target.files);
    this.files = ev.target.files[0];
  }

    submit(){
      if (this.files.lenght <= 0)
          return;
      this.authCtr.upload(this.files);    

  }

  getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
  });
  
    }


}
