import { CallNumber } from '@ionic-native/call-number/ngx';
import { PharmacieService } from '../../services/pharmacie.service';
import { PharmacieModel } from '../../models/pharmacie.model';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
const {Network} = Plugins;
@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.page.html',
  styleUrls: ['./pharmacie.page.scss'],
})
export class PharmaciePage implements OnInit {
  public resultat:string="";
  public pharmacies;
  public pharmaciesP;
  public kw:string="";
  public pharmacie:PharmacieModel;
  public listPharmacie:number = 0;
  public buttonPlus: number = 0;
  public title: string = 'Pharmacies';
  networkListener: PluginListenerHandle;
  networkStatus:NetworkStatus;
  constructor(public geolocation:Geolocation,private geocoder:NativeGeocoder,private pharmacieservice:PharmacieService,private callNumber: CallNumber) {
    this.pharmacie = {} as PharmacieModel;
  }

  async ngOnInit() {
    /*console.log("network status change",status);
    this.networkStatus = status;
   });

   this.networkStatus = await Network.getStatus();
   if(this.networkStatus.connected == false){
    this.pharmaciesP =[
      {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'},
      {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'}
    ]
   }else if(this.networkStatus.connected == true){
    this.afficherPhar();
  }*/
  this.networkListener= Network.addListener('networkStatusChange',status =>{
    console.log("network status change",status);
    this.networkStatus = status;
   });

   this.networkStatus = await Network.getStatus();
   if(this.networkStatus.connected == false){
     this.pharmaciesP =[
       /*{nom:'',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'},
       {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'}*/
     ]
   }else if(this.networkStatus.connected == true){
    this.afficherPhar();
   }
  }

  afficherPhar(){
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
        this.pharmacieservice.getpharmacie(localite)
      .subscribe(data=>{
        this.pharmaciesP = data;
      },err=>{
        console.log(err)
      })
     });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
  }
  afficherPharmacieV(kw){
    this.pharmacieservice.getPharv(kw)
      .subscribe(data=>{
        this.pharmacies = data;
      },err=>{
        console.log(err)
      })
  }
  appelleR(telephone: string) {
    console.log(telephone);
    this.callNumber.callNumber(telephone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
}
  creerPharmacie() {
    this.listPharmacie=1;
    this.buttonPlus=1;
    this.title='Création pharmacie';
  }
  retour(){
    this.listPharmacie=0;
    this.buttonPlus=0;
    this.title='Pharmacies';
  }
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.pharmacies.length == 1000) {
            event.target.disabled = true;
        }
    }, 500);
}

async enregistrer(pharmacie:PharmacieModel) {
  console.log(pharmacie);
    this.geolocation.getCurrentPosition().then((position) => {
      pharmacie.latitude= position.coords.latitude;
      pharmacie.longitude= position.coords.longitude;
      var options:NativeGeocoderOptions={
        useLocale:true,
        maxResults:1
      }
       this.geocoder.reverseGeocode(pharmacie.latitude,pharmacie.longitude,options).
       then((results)=>{
          pharmacie.localite = results[0].subLocality;
          pharmacie.ville = results[0].administrativeArea;
          this.pharmacieservice.enregistrerPhar(pharmacie)
      .subscribe(res=>{
      this.retour();
      });
       });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
}

}
