import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TasksPage } from './tasks';
import { HttpService } from '../../providers/http.service';

@NgModule({
  declarations: [TasksPage],
  imports: [IonicPageModule.forChild(TasksPage)],
  providers: [HttpService],
  exports: [TasksPage]
})
export class TasksPageModule {}
