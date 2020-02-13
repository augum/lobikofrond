import { Observable } from 'rxjs';
import { AmbulanceModel } from './../models/ambulance.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {
  public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) {
    
   }
   getAmbulance(kw:string):Observable<AmbulanceModel>{
      return this.httpclient.get<AmbulanceModel>(this.host+"/ambulance?kw="+kw);
   }
   getAmbulanceP(kw:string):Observable<AmbulanceModel>{
    return this.httpclient.get<AmbulanceModel>(this.host+"/ambulancep?kw="+kw);
 }
 enregistrerMed(ambulance:AmbulanceModel):Observable<AmbulanceModel>{
    return this.httpclient.post<AmbulanceModel>(this.host+"/ambulance",ambulance);
  }
}
