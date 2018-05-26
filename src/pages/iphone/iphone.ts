import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarService } from '../../services/search-bar-service';


/**
 * Generated class for the IphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iphone',
  templateUrl: 'iphone.html',
  providers: [SearchBarService]
})
export class IphonePage {
	
	page: any;
  	data: any = {};
  	params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public SearchBarService : SearchBarService) {
  		
      	this.page =  {
                      "title": "PRODUCTOS",
                      "theme": "Layout3iphone"
                    }
       	this.params = SearchBarService.prepareParams(this.page); 
       	this.params.data = SearchBarService.load(this.page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IphonePage');
  }

}
