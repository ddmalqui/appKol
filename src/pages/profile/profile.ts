import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingProvider } from '../../providers/loading/loading';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	userData:any;

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth,
   public navParams: NavParams, 
    public loadingProvider : LoadingProvider) {
  
  		this.userData = this.navParams.get('res');
  		console.log('userData',this.userData);

  }

 logout(){
    this.loadingProvider.startLoading();
  	this.afAuth.auth.signOut();
  	this.navCtrl.setRoot('LoginPage');
    this.loadingProvider.stopLoading();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
