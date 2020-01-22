import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';
import { MotdService } from '../motd.service';
import { Unsubscribe } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUserJSON: string;
  currentUserJWT: string;
  motdResult: string;

  constructor(private app: FirebaseApp, private router: Router, private motd: MotdService) { }

  onAuthStateChangedHandler: Unsubscribe

  ngOnInit() {
    this.onAuthStateChangedHandler = this.app.auth().onAuthStateChanged((user) => {
      if (user == null) {
        this.router.navigate(['/login']);
      } else {
        this.currentUserJSON = JSON.stringify(user);
        user.getIdToken().then((token) => {
          this.currentUserJWT = token;
        })

        this.motd.getMotd().toPromise().then((result) => {
          this.motdResult = result.motd
        })
      }
    })
  }

  async logout() {
    await this.app.auth().signOut();
    this.router.navigate(["/"]);
  }
}
