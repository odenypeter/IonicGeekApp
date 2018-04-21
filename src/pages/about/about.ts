import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  /**
   * Logout
   */
  logout() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
