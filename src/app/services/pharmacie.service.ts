import { Observable } from 'rxjs';
import { PharmacieModel } from './../models/pharmacie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

 public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) { }
  //recupere la pharmacie proche
  getpharmacie(kw:string):Observable<PharmacieModel>{
    return this.httpclient.get<PharmacieModel>(this.host+"/pharmacies?kw="+kw);
 }
 //recupere la pharmacie dans la ville
 getPharv(kw:string):Observable<PharmacieModel>{
  return this.httpclient.get<PharmacieModel>(this.host+"/pharmacieV?kw="+kw);
}
  enregistrerPhar(pharmacie:PharmacieModel):Observable<PharmacieModel>{
    return this.httpclient.post<PharmacieModel>(this.host+"/pharmacies",pharmacie);
  }
}
