import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpService } from "./../../providers/http.service";

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  public tasks: any;
  public error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpService) {
  }

  ionViewDidLoad() {
    this.httpService.fetchTasks().subscribe(
      response => (this.tasks = response),
      error => (this.error = <any>error)
    );
    console.log(this.tasks);
  }

}
