import { HopitalModel } from './../models/hopital.model';
import { Injectable } from '@angular/core';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) {

   }
   getHopital(kw:string):Observable<HopitalModel>{
      return this.httpclient.get<HopitalModel>(this.host+"/hopital?kw="+kw);
   }
   getHopitalp(kw:string):Observable<HopitalModel>{
    return this.httpclient.get<HopitalModel>(this.host+"/hopitalp?kw="+kw);
 }
enregistrerMed(hopital:HopitalModel):Observable<HopitalModel>{
    return this.httpclient.post<HopitalModel>(this.host+"/hopital",hopital);
  }
}
