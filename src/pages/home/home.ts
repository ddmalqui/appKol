import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { IService } from '../../services/IService';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService,ListViewGoogleCardsService]

})
export class HomePage {

  page: any;
  service: IService;
  data: any = {};

  constructor(public navCtrl: NavController, public serviceHome: HomeService,
  	public googlecardService : ListViewGoogleCardsService, navParams: NavParams) { 
    	this.page = navParams.get('page');
        console.log('details');
        console.log(this.page);
        this.service = navParams.get('service');
       console.log('service');
       console.log(this.service);
       this.data = googlecardService.getDataForLayout2();
        //this.params = this.service.prepareParams(this.page, navCtrl);
          //this.params.data = this.service.load(this.page);
    	//console.log(this.data);

}
}