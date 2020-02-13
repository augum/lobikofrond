import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {MedecinModel} from '../models/medecin.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
   public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) { }

  public affichermed(kw:string):Observable<MedecinModel>{
    return this.httpclient.get<MedecinModel>(this.host+"/medecins?kw="+kw);
  }

  enregistrerMed(medecin:MedecinModel):Observable<MedecinModel>{
    return this.httpclient.post<MedecinModel>(this.host+"/medecins",medecin);
  }
  updateMed(id,medecin:MedecinModel):Observable<MedecinModel>{
    return this.httpclient.put<MedecinModel>(this.host+"/medecins/"+id,medecin);
  }

}
