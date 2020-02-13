import { BanquedesangService } from './../../services/banquedesang.service';
import { BanquedeSangModel } from './../../models/banquedesang.model';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
const {Network} = Plugins;

@Component({
  selector: 'app-banquedesang',
  templateUrl: './banquedesang.page.html',
  styleUrls: ['./banquedesang.page.scss'],
})
export class BanquedesangPage implements OnInit {

  public nom:string;
  public listHopitaux: number = 0;
  public buttonPlus: number = 0;
  public title: string = 'Banque de sang';
  public bs: BanquedeSangModel;
  public kw:string="";
  public banqueSangs;
  public banqueSangsP;
  public localite:string="";
  networkListener: PluginListenerHandle;
  networkStatus:NetworkStatus;
  constructor(private router:Router,private bsservice:BanquedesangService,public geolocation:Geolocation,
  private toastctrl:ToastController,private geocoder:NativeGeocoder,private callNumber: CallNumber) {
    this.bs = {} as BanquedeSangModel;
   }

async  ngOnInit() {

  this.networkListener= Network.addListener('networkStatusChange',status =>{
    console.log("network status change",status);
    this.networkStatus = status;
   });

   this.networkStatus = await Network.getStatus();
   if(this.networkStatus.connected == false){
    this.banqueSangsP=[
      {nom:'Banque de sang Hopital saint Joseph ',telephone:'+243854878767',ville:'Kinshasa',adresse:'14 ème rue Limete residentiel',localite:'Limete'}
    ]
   }else if(this.networkStatus.connected == true){
      this.afficherHopP();
   }
  }
  afficherHopP(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latitude= position.coords.latitude;
      let longitude= position.coords.longitude;
      var options:NativeGeocoderOptions={
        useLocale:true,
        maxResults:1
      };
      this.geocoder.reverseGeocode(latitude,longitude,options).
     then((results)=>{
        var localite = results[0].subLocality;
        this.bsservice.getbsP(localite)
      .subscribe(data=>{
        this.banqueSangsP = data;
      },err=>{
        console.log(err)
      })
     });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
  }
  afficherHop(kw){
    this.bsservice.getbs(kw)
      .subscribe(data=>{
        this.banqueSangs = data;
      },err=>{
        console.log(err)
      })
  }
  creerHopital() {
    this.listHopitaux=1;
    this.buttonPlus=1;
    this.title='Création BS';
  }
  retour(){
    this.listHopitaux=0;
    this.buttonPlus=0;
    this.title='Banque de sang';
  }
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.banqueSangs.length == 1000) {
            event.target.disabled = true;
        }
    }, 500);
}
async enregistrer(bs:BanquedeSangModel) {
  console.log(bs);
    this.geolocation.getCurrentPosition().then((position) => {
      bs.latitude= position.coords.latitude;
      bs.longitude= position.coords.longitude;
      var options:NativeGeocoderOptions={
        useLocale:true,
        maxResults:1
      }
       this.geocoder.reverseGeocode(bs.latitude,bs.longitude,options).
       then((results)=>{
          bs.localite = results[0].subLocality;
          bs.ville = results[0].administrativeArea;
          this.bsservice.enregistrerMed(bs)
      .subscribe(res=>{
        this.bs=res;
        console.log(bs);
        this.retour();
      this.retour();
      });
       });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
}
appelleR(telephone: string) {
  console.log(telephone);
  this.callNumber.callNumber(telephone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
}
}
