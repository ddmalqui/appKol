import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { IService } from '../../services/IService';

import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService, ListViewGoogleCardsService, ListViewExpandableService]
})
export class HomePage {

  page: any;
  service: IService;
  data: any = {};
  params: any = {};

  pageExpandableService: any;
  dataExpandableService: any = {};
  paramsExpandableService: any = {};

  constructor(public navCtrl: NavController, public serviceHome: HomeService,
  	public googlecardService : ListViewGoogleCardsService, ExpandableService : ListViewExpandableService, 
    navParams: NavParams) { 

       this.dataExpandableService = ExpandableService.getDataForLayout2();
       
       this.pageExpandableService =  {
                        "title": "Full image with CTA", "theme": "layout2"
                     }
        this.paramsExpandableService = ExpandableService.prepareParams(this.pageExpandableService); 
        this.paramsExpandableService.data = ExpandableService.load(this.pageExpandableService);
      

        //this.params = this.service.prepareParams(this.page, navCtrl);
          //this.params.data = googlecardService.load(this.page);
    	//console.log(this.data);

}

gotoPageProfile(){
  this.navCtrl.push('ProfilePage');
}

}