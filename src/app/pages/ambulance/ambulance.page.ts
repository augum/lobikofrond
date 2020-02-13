import { CallNumber } from '@ionic-native/call-number/ngx';
import { AmbulanceService } from './../../services/ambulance.service';
import { AmbulanceModel } from './../../models/ambulance.model';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
const {Network} = Plugins;


@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.page.html',
  styleUrls: ['./ambulance.page.scss'],
})
export class AmbulancePage implements OnInit {

  public nom:string;
  public listHopitaux: number = 0;
  public buttonPlus: number = 0;
  public title: string = 'Ambulance';
  public ambulance: AmbulanceModel;
  public kw:string="";
  public ambulances;
  public ambulancesP;
  public localite:string="";
  networkListener: PluginListenerHandle;
  networkStatus:NetworkStatus;
  constructor(private router:Router,private ambulanceservice:AmbulanceService,public geolocation:Geolocation,
  private toastctrl:ToastController,private geocoder:NativeGeocoder,private callNumber: CallNumber) {
    this.ambulance = {} as AmbulanceModel;
   }

async  ngOnInit() {

  this.networkListener= Network.addListener('networkStatusChange',status =>{
    console.log("network status change",status);
    this.networkStatus = status;
   });

   this.networkStatus = await Network.getStatus();
   if(this.networkStatus.connected == false){
    this.ambulancesP=[
      {nom:'Ambulance Hopital Saint Joseph',telephone:'+243854878767',ville:'Kinshasa',adresse:'14 ème rue Limete residentiel',localite:'Limete'}

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
        this.ambulanceservice.getAmbulanceP(localite)
      .subscribe(data=>{
        this.ambulancesP = data;
      },err=>{
        console.log(err)
      })
     });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
  }
  afficherHop(kw){
    this.ambulanceservice.getAmbulance(kw)
      .subscribe(data=>{
        this.ambulances = data;
      },err=>{
        console.log(err)
      })
  }
  creerHopital() {
    this.listHopitaux=1;
    this.buttonPlus=1;
    this.title='Création ambulance';
  }
  retour(){
    this.listHopitaux=0;
    this.buttonPlus=0;
    this.title='Ambulances';
  }
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.ambulances.length == 1000) {
            event.target.disabled = true;
        }
    }, 500);
}
async enregistrer(ambulance:AmbulanceModel) {
  console.log(ambulance);
    this.geolocation.getCurrentPosition().then((position) => {
      ambulance.latitude= position.coords.latitude;
      ambulance.longitude= position.coords.longitude;
      var options:NativeGeocoderOptions={
        useLocale:true,
        maxResults:1
      }
       this.geocoder.reverseGeocode(ambulance.latitude,ambulance.longitude,options).
       then((results)=>{
          ambulance.localite = results[0].subLocality;
          ambulance.ville = results[0].administrativeArea;
          this.ambulanceservice.enregistrerMed(ambulance)
      .subscribe(res=>{
        this.ambulance=res;
        console.log(ambulance);
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
