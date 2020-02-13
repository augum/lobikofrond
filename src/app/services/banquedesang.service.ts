import { Observable } from 'rxjs';
import { BanquedeSangModel } from './../models/banquedesang.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanquedesangService {
  public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) {
    
   }
   getbs(kw:string):Observable<BanquedeSangModel>{
      return this.httpclient.get<BanquedeSangModel>(this.host+"/banque?kw="+kw);
   }
   getbsP(kw:string):Observable<BanquedeSangModel>{
    return this.httpclient.get<BanquedeSangModel>(this.host+"/banquep?kw="+kw);
 }
enregistrerMed(bs:BanquedeSangModel):Observable<BanquedeSangModel>{
    return this.httpclient.post<BanquedeSangModel>(this.host+"/banque",bs);
  }
}
