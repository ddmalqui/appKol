import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarService } from '../../services/search-bar-service';


/**
 * Generated class for the BuscarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar-producto',
  templateUrl: 'buscar-producto.html',
  providers: [SearchBarService]
})
export class BuscarProductoPage {
	
	page: any;
  	data: any = {};
  	params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public SearchBarService : SearchBarService) {

  		this.data = SearchBarService.getDataForLayout3();
      	this.page =  {
                      "title": "PRODUCTOS",
                      "theme": "layout3"
                    }
       	this.params = SearchBarService.prepareParams(this.page); 
       	this.params.data = SearchBarService.load(this.page);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarProductoPage');
  }

}
