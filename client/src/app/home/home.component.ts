import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private app: FirebaseApp, private router: Router) { }

  ngOnInit() {
  }

  async logout() {
    await this.app.auth().signOut();
    this.router.navigate(["/"]);
  }
}
