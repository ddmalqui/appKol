import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingProvider } from '../../providers/loading/loading';

import { RegisterService } from '../../services/register-service';


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
  providers: [RegisterService]
})
export class ProfilePage {

  page: any;
    data: any = {};
    params: any = {};
    infoUser: any = {};

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth,
   public navParams: NavParams, 
    public loadingProvider : LoadingProvider,
    public regServ : RegisterService) {
  
      //this.userData = this.navParams.get('res');

      this.page =  {
                      "title": "PRODUCTOS",
                      "theme": "Layout2"
                    }
         this.params = regServ.prepareParams(this.page); 
         this.params.data = regServ.load(this.page);
         this.infoUser = this.navParams.get('res');

         if (this.navParams.get('res') != null){
             console.log('res i');
             console.log(this.navParams.get('res').email);
             console.log('res f');
         }else{

         }
         
         


  }

 logout(){
    this.loadingProvider.startLoading();
    //this.afAuth.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
    this.loadingProvider.stopLoading();

  }

  gotoHome(){
    this.navCtrl.setRoot('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
