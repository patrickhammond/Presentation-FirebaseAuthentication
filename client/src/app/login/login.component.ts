import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private ui: firebaseui.auth.AuthUI;

  constructor(private app: FirebaseApp, private router: Router) { }

  ngOnInit() {
    this.ui = new firebaseui.auth.AuthUI(this.app.auth());

    this.ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: (result, redirect) => {
          this.router.navigate(["/"]);
          return false;
        }
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
    });
  }

  ngOnDestroy() {
    this.ui.delete();
  }
}
