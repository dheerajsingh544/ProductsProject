import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Product } from './product.model';
import { Setting } from '../modules/setting.model';

@Injectable(
)
export class ProductService {

  products: Product[] ;
  constructor(private http: HttpClient) {
  } 

  // getProducts() {
  //   return this.products.slice();
  // }
  getProduct(index: number):Observable<any>{
    const getUrl="http://localhost:8080/product/getSingleProduct";
    let queryParams=new HttpParams().append('pid',index);
    //queryParams=queryParams.append("pid",index)
    return this.http.get(getUrl,{params:queryParams});
  }
   remove(id: number) {
    const getUrl="http://localhost:8080/product/deleteProduct";
    let queryParams=new HttpParams();
    queryParams=queryParams.append("pid",id)
    return this.http.get(getUrl,{params:queryParams});
   }

  add(product: Product) {
    return this.http.post("http://localhost:8080/product/addProduct",product)
  }

 
  apicall() {
    const url = "http://localhost:8080/product/getProduct";
    return this.http.get(url);
  }
  updateSetting(setting:Setting){
    return this.http.post("http://localhost:8080/setting/updateSetting",setting);
  }
  
  updateProduct(product:Product){
    return this.http.post("http://localhost:8080/product/updateProduct",product);
  }
}
