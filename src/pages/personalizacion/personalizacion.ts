import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';

/**
 * Generated class for the PersonalizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalizacion',
  templateUrl: 'personalizacion.html',
   providers: [ListViewGoogleCardsService]
})
export class PersonalizacionPage {

    page: any;
    data: any = {};
    params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public googleCardSrv: ListViewGoogleCardsService) {

  	this.page =  {
                      "title": "PRODUCTOS",
                      "theme": "Layout3"
                    }
       	this.params = googleCardSrv.prepareParams(this.page); 
       	this.params.data = googleCardSrv.load(this.page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizacionPage');
  }

}
