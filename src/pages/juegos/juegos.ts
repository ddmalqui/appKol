import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarService } from '../../services/search-bar-service';


/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
    providers: [SearchBarService]
})
export class JuegosPage {
	
	page: any;
  	data: any = {};
  	params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  		public SearchBarService : SearchBarService) {

      	this.page =  {
                      "title": "PRODUCTOS",
                      "theme": "layout3juegos"
                    }
       	this.params = SearchBarService.prepareParams(this.page); 
       	this.params.data = SearchBarService.load(this.page);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }

}
