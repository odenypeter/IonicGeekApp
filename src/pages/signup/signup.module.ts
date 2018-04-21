import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AuthService } from "./../../providers/auth.service";
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  exports: [SignupPage],
  providers: [AuthService]
})
export class SignupPageModule {}
