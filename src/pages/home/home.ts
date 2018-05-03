import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { Authentication } from '../../services/authentication';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]

})
export class HomePage {

  data: any = {};

  constructor(public navCtrl: NavController, public service: HomeService, private Auth : Authentication) { 
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
  }

    createAccountWithGoogle() {
      this.Auth.createUserWithGoogle();
    }

    createAccountWithFacebook() {
      this.Auth.createUserWithFacebook();
    }

}
