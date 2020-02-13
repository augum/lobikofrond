import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CallNumber} from '@ionic-native/call-number/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';


import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';


import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

export const firebaseConfig={
    apiKey: "AIzaSyCuDMIdaM2QKI8aDzmJ6kyuJM92PgRx3zc",
    authDomain: "lobikomed.firebaseapp.com",
    databaseURL: "https://lobikomed.firebaseio.com",
    projectId: "lobikomed",
    storageBucket: "lobikomed.appspot.com",
    messagingSenderId: "550578259678",
    appId: "1:550578259678:web:398994e07dfcd629fb644f",
    measurementId: "G-60PLSBMPR8"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireStorageModule,
    AngularFireAuthModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    Geolocation,
    NativeGeocoder,
    SMS,
    SocialSharing
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
