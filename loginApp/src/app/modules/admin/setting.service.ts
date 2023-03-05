import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Setting } from '../setting.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  isAllowCreateProduct = new Subject<boolean>();
  isAllowEdit= new Subject<boolean>();
  isAllowDelete= new Subject<boolean>();
  isallowProductSearch= new Subject<boolean>();
  
  raiseData(data:boolean){
    this.isAllowCreateProduct.next(data);//check name with search
  }
  raiseSearchData(data:boolean){
    this.isallowProductSearch.next(data);//check name with search
  }
  constructor(private http: HttpClient) { }

  updateSetting(setting:Setting){
    return this.http.post("http://localhost:8080/setting/updateSetting",setting);
  }
  getSetting():Observable<any>{
    let queryParams=new HttpParams().set('id',123);
    return this.http.get<any>("http://localhost:8080/setting/getSetting",{params:queryParams});
  }
}
