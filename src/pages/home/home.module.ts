import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { HttpService } from "../../providers/http.service";
import { AuthService } from '../../providers/auth.service';

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  declarations: [HomePage],
  exports: [HomePage],
  providers: [HttpService, AuthService]
})
export class HomeModule {}
