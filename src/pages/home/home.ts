import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { HttpService } from "../../providers/http.service";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public items;
  public error;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public httpDirective: HttpService
  ) {
  }

  ionViewDidLoad() {
  }

  /**
   * navigate to about us page
   */
  public navigateTOAbout() {
    this.navCtrl.push("AboutPage");
  }

  /**
   * login
   */
  login() {
    this.navCtrl.push("LoginPage");
  }

  /**
   * login
   */
  signup() {
    this.navCtrl.push("SignupPage");
  }
}
