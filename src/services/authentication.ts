import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

const identifire = "token";
@Injectable()

export class Authentication{

	storageRef : firebase.storage.Reference;

	constructor(private AgularAuth : AngularFireAuth){
		this.setUp();
		this.storageRef = firebase.storage().ref();
	}

	public token : string;
	 

		setUp(){
			//guardo en el local storage si alguien ya esta loguiado.
			this.token = this.getTockenFromLS();
			console.log(this.token);
			this.AgularAuth.authState.subscribe((firebaseUser) => {
				if(firebaseUser){
					localStorage.setItem(identifire,firebaseUser.uid);
					this.token = firebaseUser.uid;
				}else{
					localStorage.removeItem(identifire);
					this.token = null;
				}
			}
				)
		}

		getTockenFromLS() : string{
			return localStorage.getItem(identifire);
		}

		createUserWithEmailAndPassword(correo,password){
			return this.AgularAuth.auth.createUserWithEmailAndPassword(correo,password);
		}

		createUserWithGoogle(){
			let provider = new firebase.auth.GoogleAuthProvider;
			return this.createUserWithProvider(provider);
		}

		createUserWithFacebook(){
			let provider = new firebase.auth.FacebookAuthProvider;
			return this.createUserWithProvider(provider);
		}


		createUserWithProvider(provider){
			return this.AgularAuth.auth.signInWithRedirect(provider)
			.then(result =>{
					return firebase.auth().getRedirectResult;
				});
		}

		logOut(){
			return this.AgularAuth.auth.signOut().then(() => 
				{this.token = null}
				)
		}

		setProfileData(){
			// this.AgularAuth.authState.suscribe(auth => {
			// 	this.AngularDB.list('profile/${auth.uid}')
			// })
		}

		setTelefono(tel: number){
		//var database = firebase.database();
		var displayDate = new Date().toLocaleDateString();
		 var newPostRef = firebase.database().ref('telefonos/anonimos').push();
		 newPostRef.set
		 ({
    		telefono: tel,
    		fecha: displayDate
  			});
		}

		upload(file){
		let myfile = this.storageRef.child("/personalizadas/"+file.name);
		let uploadTask = myfile.put(file);

		return new Promise((resolve,reject)=>{

			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot)=>{},
			(err)=>reject(err),
			() => {
				//console.log(uploadTask.snapshot.downloadURL);
				resolve(uploadTask.snapshot.downloadURL);
				
					} 
			);

		});
		
	}

}