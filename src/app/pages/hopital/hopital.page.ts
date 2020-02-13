import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HopitalModel } from '../../models/hopital.model';
import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { HopitalService } from '../../services/hopital.service';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
const {Network} = Plugins;

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.page.html',
  styleUrls: ['./hopital.page.scss'],
})
export class HopitalPage implements OnInit {

  public nom:string;
  public listHopitaux: number = 0;
  public buttonPlus: number = 0;
  public title: string = 'Hôpitaux';
  public hopital: HopitalModel;
  public kw:string="";
  public hopitaux;
  public hopitauxp;
  public localite:string="";
  networkListener: PluginListenerHandle;
  networkStatus:NetworkStatus;
  constructor(private router:Router,private hopitalservice:HopitalService,public geolocation:Geolocation,
  private toastctrl:ToastController,private geocoder:NativeGeocoder) {
    this.hopital = {} as HopitalModel;
   }

  async ngOnInit() {

    this.networkListener= Network.addListener('networkStatusChange',status =>{
      console.log("network status change",status);
      this.networkStatus = status;
     });

     this.networkStatus = await Network.getStatus();
     if(this.networkStatus.connected == false){
      this.hopitauxp=[
        {nom:'Hopital Saint Joseph',telephone:'+243854878767',mail:'hopitalsaintjosephkin@gmail.com',ville:'Kinshasa',adresse:'14 ème rue Limete residentiel',service:'Dispensaire,Diabetologie,Urgence,Réanimation,Soins intentifs,Pédiatrie,Néonatologie,Urgence pédiatrique,Chirurgie,Gynecologie obstrétrique,Fistula clinic,Ophtalmologie,Stomatologie(dentisterie),Imagerie médicale,Otorhinolaryngologie(ORL),Morgue,Pharmacie',localite:'Linmete'}

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
        this.hopitalservice.getHopitalp(localite)
      .subscribe(data=>{
        this.hopitauxp = data;
      },err=>{
        console.log(err)
      })
     });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
  }
  afficherHop(kw){
    this.hopitalservice.getHopital(kw)
      .subscribe(data=>{
        this.hopitaux = data;
      },err=>{
        console.log(err)
      })
  }
  creerHopital() {
    this.listHopitaux=1;
    this.buttonPlus=1;
    this.title='Création hôpital';
  }
  retour(){
    this.listHopitaux=0;
    this.buttonPlus=0;
    this.title='Hôpitaux';
  }
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.hopitaux.length == 1000) {
            event.target.disabled = true;
        }
    }, 500);
}
async enregistrer(hopital:HopitalModel) {
  console.log(hopital);
    this.geolocation.getCurrentPosition().then((position) => {
      hopital.latitude= position.coords.latitude;
      hopital.longitude= position.coords.longitude;
      var options:NativeGeocoderOptions={
        useLocale:true,
        maxResults:1
      }
       this.geocoder.reverseGeocode(hopital.latitude,hopital.longitude,options).
       then((results)=>{
          hopital.localite = results[0].subLocality;
          hopital.ville = results[0].administrativeArea;
          this.hopitalservice.enregistrerMed(hopital)
      .subscribe(res=>{
        this.hopital=res;
        console.log(hopital);
        this.retour();
      hopital.nom ="";
      hopital.telephone ="";
      hopital.ville ="";
      hopital.adresse ="";
      hopital.mail ="";
      hopital.service ="";
      this.retour();
      });
       });
     }).catch((error) => {
       console.log('Erreur pour la localisation probleme internet', error);
     });
}

  DetailHopital(hopital:HopitalModel) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            special: JSON.stringify(hopital)
        }
    };
     this.router.navigate(['detail-hopital'], navigationExtras);
    }
}
