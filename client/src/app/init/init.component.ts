import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';
import { Unsubscribe } from 'firebase';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit, OnDestroy {

  constructor(private app: FirebaseApp, private router: Router) { }

  private onAuthStateChangedUnsubscriber: Unsubscribe;

  ngOnInit() {
    // Firebase Auth note: you can't immediately query for currentUser as it will
    // initially return null. Instead you should setup a listener with Firebase to get
    // notified when it can determine that the auth state has changed (or loaded).
    this.onAuthStateChangedUnsubscriber = this.app.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnDestroy() {
    if (this.onAuthStateChangedUnsubscriber !== undefined) {
      this.onAuthStateChangedUnsubscriber();
    }
  }
}
