import { Injectable } from '@angular/core';
import {LikeModel} from '../models/like.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  public host:string="http://41.242.128.107:780";
  constructor(private httpclient:HttpClient) { }

  public afficherlike():Observable<LikeModel>{
    return this.httpclient.get<LikeModel>(this.host+"/likes");
  }
  updatelike(id,like:LikeModel):Observable<LikeModel>{
    return this.httpclient.put<LikeModel>(this.host+"/likes/"+id,like);
  }
}
