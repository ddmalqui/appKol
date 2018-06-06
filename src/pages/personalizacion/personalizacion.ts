import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { Authentication } from '../../services/authentication';

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

    files : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public googleCardSrv: ListViewGoogleCardsService,
    private authCtr: Authentication) {

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

  fileChanges(ev){
    console.log(ev.target.files);
    this.files = ev.target.files[0];
  }

  submit(){
    //if (this.files.lenght <= 0)
      //return;
  //  this.authCtr.upload(this.files);  
  }


}
