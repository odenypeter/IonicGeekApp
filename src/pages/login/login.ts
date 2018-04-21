import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from "./../../providers/auth.service";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public credentials = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  ionViewDidLoad() {
  }

  /**
   * login Page
   */
  login() {
    this.authService.login(this.credentials).subscribe(user => {
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token);
        this.navCtrl.push('TasksPage');
      } else {
        this.navCtrl.push('HomePage');
      }
    })
  }
}
