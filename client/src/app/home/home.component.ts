import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUserJSON: string;
  currentUserJWT: string;

  constructor(private app: FirebaseApp, private router: Router) { }

  ngOnInit() {
    this.currentUserJSON = JSON.stringify(this.app.auth().currentUser);
    this.app.auth().currentUser.getIdToken().then((token) => {
      this.currentUserJWT = token;
    })
  }

  async logout() {
    await this.app.auth().signOut();
    this.router.navigate(["/"]);
  }
}
