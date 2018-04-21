import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from "./../../providers/auth.service";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  public userData = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignupPage');
  }

  /**
   * signup
   */
  signup() {
    console.log(this.userData);
    this.authService.register(this.userData).subscribe(res => {
      if (res) {
          this.navCtrl.push("LoginPage");
      } else {
        console.log(res);
      }
    })
  }
}
