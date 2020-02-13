import { LikeService } from './../services/like.service';
import { LikeModel } from './../models/like.model';
import { Component, OnInit } from '@angular/core';
import{Platform} from '@ionic/angular';
import {Router} from "@angular/router";
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController } from '@ionic/angular';




const {Network} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subscribe:any;
  networkListener: PluginListenerHandle;
  networkStatus:NetworkStatus;
  public likes;
  constructor(public platform:Platform,private route: Router,private socialSharing: SocialSharing,
   private likeService:LikeService,public toastctrl:ToastController) {

     this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
        if(this.constructor.name =="HomePage"){
          if(window.confirm("Voulez vous fermer l'application")){
             navigator["app"].exitApp();
          }
        }
     })
  }
  async ngOnInit(){
    this.like();
     this.networkListener= Network.addListener('networkStatusChange',status =>{
      console.log("network status change",status);
      this.networkStatus = status;
     });

     this.networkStatus = await Network.getStatus();
  }
  medecin(){
    console.log("ok");
    this.route.navigate(['list']);
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
 apropos(){
   window.confirm("Contact:Téléphone: +243 904168454 Email: lobikocongo@gmail.com");


 }
}
