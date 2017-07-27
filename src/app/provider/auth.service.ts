import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user : Observable<firebase.User>;
  constructor(private firebaseAuth:AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

   signup(email:string, password: string){
     this.firebaseAuth
     .auth.createUserWithEmailAndPassword(email,password)
     .then(value => {
       console.log('Success', value);
     }).catch(err => {
       console.log('Something went wrong: ', err.message);
     });
   }

   login(email:string, password: string){
     this.firebaseAuth
     .auth
     .signInWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Nice, it worked!');
     })
     .catch(err => {
       console.log('Something went wrong:',err.message);
     });
   }

   logout(){
     this.firebaseAuth
     .auth
     .signOut();
   }


  //  Login Google

  loginWithGoogle(){
    this.firebaseAuth
    .auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(value => {
      console.log('Nice, it worked to auth with Google Account');
    }).catch(err => {
      console.log('Something went wrong: ', err.message);
    })
  }


  // Login Facebook
  loginWithFacebook() {
    this.firebaseAuth
    .auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(value => {
      console.log('Nice, it work to auth with Facebook.');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  loginWithTwitter(){
    this.firebaseAuth
    .auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(value => {
      console.log('Nice, To login with Twitter');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  loginWithGithub() {
    this.firebaseAuth
    .auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then(value => {
      console.log('Nice, Auth with Github');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  isUserAuthenticated(){
    return this.user != null;
  }

}
