import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'opciones-inicio.html',
})

export class OpcionesInicioPage {

	page: any;
    service: IService;
    params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 // this.page = navParams.get('page');
    //     this.service = navParams.get('service');
    //     if (this.service) {
    //         this.params = this.service.prepareParams(this.page, navCtrl);
    //         this.params.data = this.service.load(this.page);
    //     } else {
    //         navCtrl.setRoot("HomePage");
    //     }	
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionesInicioPage');
  }

}
