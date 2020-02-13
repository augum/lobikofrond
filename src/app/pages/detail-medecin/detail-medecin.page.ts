import { MedecinService } from './../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { SMS } from '@ionic-native/sms/ngx';
import {CallNumber} from "@ionic-native/call-number/ngx";
import { ToastController } from '@ionic/angular';
import {Plugins,NetworkStatus,PluginListenerHandle} from "@capacitor/core";

const {Network} = Plugins;

@Component({
  selector: 'app-detail-medecin',
  templateUrl: './detail-medecin.page.html',
  styleUrls: ['./detail-medecin.page.scss'],
})
export class DetailMedecinPage implements OnInit {
 data;
 public Sms:string="";
 public isSms:boolean=false;
 networkListener: PluginListenerHandle;
 networkStatus:NetworkStatus;

  constructor(private sms: SMS,private router:Router,private route:ActivatedRoute,private callNumber: CallNumber,
  private medecinService:MedecinService,public toastctrl:ToastController) {
      this.route.queryParams.subscribe(params => {
          if (params && params.special) {
              this.data = JSON.parse(params.special);
              console.log(this.data);
          }
      });
  }

async ngOnInit() {

    this.networkListener= Network.addListener('networkStatusChange',status =>{
     console.log("network status change",status);
     this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();
  }

    retour() {
        this.router.navigateByUrl('/list');
    }
    appelleRMed(telephone: string) {
        console.log(telephone);
        this.updateMed();
        this.callNumber.callNumber(telephone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    sendSms(){
        this.isSms=true;
    }
    async smsMed(telephone: string){
      try{
        console.log(telephone);
        console.log(this.Sms);
        this.sms.send(telephone,this.Sms);
        const toast = await this.toastctrl.create({
         header:'Succès',
         message:'Message envoyé ',
         color:'success',
         position:'bottom',
         duration: 3000
       });
       this.Sms="";
       toast.present();
      }catch(error){
        const toast = await this.toastctrl.create({
          header:'Erreur',
          message:'Echec envoie',
          color:'danger',
          position:'bottom',
          duration: 3000
        });

        toast.present();
      }
        this.isSms=false;

    }
 updateMed(){
     console.log(this.data._id);
  this.data.nbrA = this.data.nbrA + 1;
  this.medecinService.updateMed(this.data._id,this.data)
  .subscribe(res=>{

  });
}
}
