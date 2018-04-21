import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpService } from "./../providers/http.service";

import { MyApp } from './app.component';
import { MyCustomInterceptor } from '../providers/my-custom-interceptor';

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyCustomInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
