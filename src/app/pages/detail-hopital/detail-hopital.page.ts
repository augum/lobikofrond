import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-detail-hopital',
  templateUrl: './detail-hopital.page.html',
  styleUrls: ['./detail-hopital.page.scss'],
})
export class DetailHopitalPage implements OnInit {
data;
public Sms:string="";
public isSms:boolean=false;
  constructor(private router:Router,private route:ActivatedRoute,private callNumber: CallNumber,public toastctrl:ToastController,
  private sms: SMS) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
          this.data = JSON.parse(params.special);
          console.log(this.data);
      }
  });
  }

  ngOnInit() {
  }
  retour() {
    this.router.navigateByUrl('/hopital');
}
appelleRMed(telephone: string) {
    console.log(telephone);
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
}
