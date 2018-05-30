import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';

import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { IService } from '../../services/IService';

import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService, ListViewExpandableService,Device]
})
export class HomePage {

  service: IService;


  myuuid: any;
  mycordova:any;
  mymodel:any;
  myplatform:any;
  myversion:any;
  mymanufacturer:any;
  myisVirtual:any;
  myserial:any;

  pageExpandableService: any;
  dataExpandableService: any = {};
  paramsExpandableService: any = {};

  constructor(public navCtrl: NavController, public serviceHome: HomeService, ExpandableService : ListViewExpandableService, 
    navParams: NavParams, private device: Device) { 

      this.dataExpandableService = ExpandableService.getDataForLayout2();
       
      this.pageExpandableService =  {
                        "title": "Full image with CTA", "theme": "layout2"
                     }
      this.paramsExpandableService = ExpandableService.prepareParams(this.pageExpandableService); 
      
      this.paramsExpandableService.data = ExpandableService.load(this.pageExpandableService);
      

      console.log('Device UUID is: ' + this.device.uuid);
      this.myuuid = this.device.uuid;
      console.log('cordova is: ' + this.device.cordova);
      this.mycordova = this.device.cordova;
      console.log('model is: ' + this.device.model);
      this.mymodel = this.device.model;
      console.log('platform is: ' + this.device.platform);
      this.myplatform = this.device.platform;
      console.log('version is: ' + this.device.version);
      this.myversion = this.device.version;
      console.log('manufacturer is: ' + this.device.manufacturer);
      this.mymanufacturer = this.device.manufacturer;
      console.log('isVirtual is: ' + this.device.isVirtual);
      this.myisVirtual = this.device.isVirtual;
      console.log('serial is: ' + this.device.serial);
      this.myserial = this.device.serial;

}

gotoPageProfile(){
  this.navCtrl.push('LoginPage');
}

}