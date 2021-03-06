import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Authentication } from '../../services/authentication';

import { ForgetPage } from '../../pages/forget/forget';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { LoadingProvider } from '../../providers/loading/loading';

const identifire = "token";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : []
})

export class LoginPage {

  public token : string;
	userData:any;
	loginData = { email:'', password:'' };
	authForm : FormGroup;
	email: AbstractControl;
	password: AbstractControl;
  passwordtype:string='password';
  passeye:string ='eye';
  constructor(public toastCtrl: ToastController, public fb: FormBuilder, public navCtrl: NavController,
   public navParams: NavParams, public afAuth: AngularFireAuth,
   public loadingProvider: LoadingProvider,public AuthServ: Authentication) {
  	this.authForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });

        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];

        this.loadingProvider.startLoading();
          this.afAuth.authState.subscribe((firebaseUser) => {
        if(firebaseUser){
          localStorage.setItem(identifire,firebaseUser.uid);
          console.log('user = ' + firebaseUser.uid);
          this.loadingProvider.stopLoading();
          this.navCtrl.setRoot('ProfilePage',{res:firebaseUser});
        }else{
          this.token = null;
          console.log('user = null');
          this.loadingProvider.stopLoading();
        }
      }
        )

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

/*------------------
--------------------*/

// For User Login

  userLogin(loginData){
    this.loadingProvider.startLoading();
  	console.log('loginData',loginData);
  		this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(result => {
          console.log('result >>',result);
          this.loadingProvider.stopLoading();
          this.moveToHome(result);
        }).catch(err => {
          this.loadingProvider.stopLoading();
          console.log('err',err);
          this.presentToast(err);
        });
  }


// For Social Login

  socialLogin(isLogin){
  	if (isLogin == "facebook"){
      this.loadingProvider.startLoading();

      let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(() => {
          this.loadingProvider.startLoading();
            firebase.auth().getRedirectResult().then((result)=>{
              console.log('result');
              this.moveToHome(result.user);
             this.loadingProvider.stopLoading();
            }).catch(function(error){
              this.loadingProvider.stopLoading();
              alert(error.message);
              console.log('error',error);
            })
            this.loadingProvider.stopLoading();
        }).catch(function(error){
          this.loadingProvider.stopLoading();
          alert(error.message);
          console.log('error',error);
        })
        this.loadingProvider.stopLoading();
  	}else if(isLogin == "google"){
      
        this.AuthServ.createUserWithGoogle();

      // this.loadingProvider.startLoading();
      // let provider = new firebase.auth.GoogleAuthProvider();
      //   firebase.auth().signInWithRedirect(provider).then(() => {
      //     this.loadingProvider.startLoading();
      //       firebase.auth().getRedirectResult().then((result)=>{
      //         console.log('result');
      //         this.loadingProvider.stopLoading();
      //        console.log(result.user);
      //         this.AuthServ.setProfileData(result.user);
      //         this.moveToHome(result.user);
      //       }).catch(function(error){
      //         this.loadingProvider.stopLoading();
      //         alert(error.message);
      //         console.log('error',error);
      //       })
      //       this.loadingProvider.stopLoading();
      //   }).catch(function(error){
      //     this.loadingProvider.stopLoading();
      //     alert(error.message);
      //     console.log('error',error);
      //   })
      //   this.loadingProvider.stopLoading();
  	}else if(isLogin == "twitter"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}else if(isLogin == "github"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}

  }

  // Move to register page
  moveToRegister(){
  	this.navCtrl.setRoot('RegisterPage');
  }

  //Move to Home Page
  moveToHome(res){
  	console.log('res',res);
  	this.navCtrl.setRoot('HomePage',{res:res});
  }

  gotoHome(){
   this.navCtrl.setRoot('HomePage'); 
  }

  presentToast(err) {
  const toast = this.toastCtrl.create({
    message: err.message,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();
}
presentAlert(err) {

}

managePassword() {
  if(this.passwordtype == 'password'){
    this.passwordtype='text';
    this.passeye='eye-off';
  }else{
    this.passwordtype='password';
    this.passeye = 'eye';
  }
}
forgetpassword(){
  this.navCtrl.setRoot('ForgetPage');
}

}
