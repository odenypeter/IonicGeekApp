import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AuthService } from "./../../providers/auth.service";
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [LoginPage],
  providers: [AuthService]
})
export class LoginPageModule {}
