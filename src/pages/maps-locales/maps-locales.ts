import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsService } from '../../services/maps-service';


/**
 * Generated class for the MapsLocalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-locales',
  templateUrl: 'maps-locales.html',
  providers: [MapsService]
})
export class MapsLocalesPage {

	page: any;
  	data: any = {};
  	params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public MapsService : MapsService) {
  	
  	 this.data = MapsService.getDataForLayout3();
      this.page =  {
                      "title": "Full Screen View",
                      "theme": "layout3"
                    }
       this.params = MapsService.prepareParams(this.page); 
       this.params.data = MapsService.load(this.page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsLocalesPage');
  }

}
