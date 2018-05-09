import { Component } from '@angular/core';
import { IonicPage, NavController,  NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { IService } from '../../services/IService';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]

})
export class HomePage {

  data: any = {};
  page: any;
  serviceIO: IService;
  params: any = {};

  constructor(public navCtrl: NavController, public service: HomeService, navParams: NavParams) { 
  	this.page = navParams.get('page');
  	console.log(this.page);
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
  }

  

}
