import { MedecinModel } from './../models/medecin.model';
import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {MedecinService} from "../services/medecin.service";
import { LikeService } from './../services/like.service';
import { LikeModel } from './../models/like.model';
import { ToastController } from '@ionic/angular';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
const {Network} = Plugins;
import{Platform} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import symptomes from '../../symptomes';
import medecin from '../../medecin';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
symptomes : Array<any>;
medecin : Array<any>;
public medecins;
public listMed: number = 0;
public buttonPlus: number = 0;
public title: string = 'Médecins';
public medM: MedecinModel;
public kw:string="";
networkListener: PluginListenerHandle;
networkStatus:NetworkStatus;
public likes;

  constructor(public platform:Platform,private route: Router,public medecinService: MedecinService,public toastctrl:ToastController
  ,private socialSharing: SocialSharing,private likeService:LikeService) {
    this.symptomes = symptomes;
    this.medecin = medecin;
    this.medM = {} as MedecinModel;

    /*this.subscribe = this.platform.backButton(async ()=>{
       if(this.constructor.name =="ListPage"){
         this.router.navigate(['home']);
       }
    })*/
  }

  async ngOnInit() {
   /*this.afficherMed(this.kw);
   this.networkListener= Network.addListener('networkStatusChange',status =>{
    console.log("network status change",status);
    this.networkStatus = status;
   });

   this.networkStatus = await Network.getStatus();
   console.log(this.networkStatus);*/
   this.like();
   this.offline();
   console.log(this.medecin, "=== symptomes loading")
  }

  async offline(){
    this.networkListener= Network.addListener('networkStatusChange',status =>{
      console.log("network status change",status);
      this.networkStatus = status;
     });

     this.networkStatus = await Network.getStatus();
     if(this.networkStatus.connected == false){
        this.medecins=[
          {nom:'KADIATA',prenom:'DIDIER',postnom:'MUELA',telephone:'+243822245084',mail:'kadimuela@gmail.com',adresse:'14ème rue Limete residentiel',hopital:'Hopital Saint Joseph',specialite:'Odonto-Stomatologie(Dentiste)',cnom:'00244'},
          {nom:'LUMBU',prenom:'DAMIEN',postnom:'MALUNDAMA',telephone:'+243990132012',mail:'damienlumbu@outlook.fr',adresse:'14ème rue Limete residentiel',hopital:'Hopital Saint Joseph, CUK',specialite:'ORL',cnom:'12462'}
        ]
     }else if(this.networkStatus.connected == true){
       this.afficherMed(this.kw);
     }
  }

  afficherMed(kw){

    this.medecinService.affichermed(kw)
      .subscribe(data=>{
        this.medecins = data;
      },err=>{
        console.log(err)
      })
  }
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.medecins.length == 1000) {
            event.target.disabled = true;
        }
    }, 500);
}
creermed() {
  this.listMed=1;
  this.buttonPlus=1;
  this.title='Création du médecin';
}

async enregistrer(medecinModels: MedecinModel) {
  console.log(medecinModels);
  try{
   this.medecinService.enregistrerMed(medecinModels)
   .subscribe(res=>{
     this.medM=res;
   });
   const toast = await this.toastctrl.create({
    header:'Succès',
    message:'Enregistrement effectué ',
    color:'success',
    position:'bottom',
    duration: 3000
  });

  toast.present();
}catch(error){
  const toast = await this.toastctrl.create({
    header:'Erreur',
    message:'Echec enregistrement',
    color:'danger',
    position:'bottom',
    duration: 3000
  });

  toast.present();
}
  this.retour();
}

retour(){
    this.buttonPlus=0;
    this.listMed=0;
    this.title='Liste des medecins';
    this.afficherMed(this.kw);
}
DetailMed(medecin:MedecinModel) {

  console.log(medecin._id);
  medecin.nbrV = medecin.nbrV + 1;
  this.medecinService.updateMed(medecin._id,medecin)
  .subscribe(res=>{

  });
  let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(medecin)
      }
  };
   this.route.navigate(['detail-medecin'], navigationExtras);
  }
  updateMed(medecin:MedecinModel){
    console.log(this.medecins._id);
 this.medecins.nbrV = this.medecins.nbrV + 1;
 this.medecinService.updateMed(this.medecins._id,this.medecins)
 .subscribe(res=>{

 });
}
sharing(){
   this.socialSharing.share('','','','https//lobiko.com');
}
like(){
    this.likeService.afficherlike()
    .subscribe(data=>{
      this.likes = data;
   });
}
async jaime(like:LikeModel){
 console.log(like._id);
 like.like = like.like  + 1;
 this.likeService.updatelike(like._id,like)
 .subscribe(res=>{

 });
 const toast = await this.toastctrl.create({
    header:'Succès',
    message:'Merci de votre confiance',
    color:'success',
    position:'bottom',
    duration: 3000
  });
  toast.present();
}
}
