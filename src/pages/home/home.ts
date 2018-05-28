import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';

import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { IService } from '../../services/IService';

import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService, ListViewExpandableService]
})
export class HomePage {

  service: IService;

  pageExpandableService: any;
  dataExpandableService: any = {};
  paramsExpandableService: any = {};

  constructor(public navCtrl: NavController, public serviceHome: HomeService, ExpandableService : ListViewExpandableService, 
    navParams: NavParams) { 

      this.dataExpandableService = ExpandableService.getDataForLayout2();
       
      this.pageExpandableService =  {
                        "title": "Full image with CTA", "theme": "layout2"
                     }
      this.paramsExpandableService = ExpandableService.prepareParams(this.pageExpandableService); 
      
      this.paramsExpandableService.data = ExpandableService.load(this.pageExpandableService);
      

}

gotoPageProfile(){
  this.navCtrl.push('ProfilePage');
}

}