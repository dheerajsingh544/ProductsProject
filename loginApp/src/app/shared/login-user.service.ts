import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
 userName =new Subject<string>();
 userRole =new Subject<string>();
 isloggedOut= new Subject<boolean>();

  private baseUrl="http://localhost:8080/user/login";
  constructor(private httpClient:HttpClient,private router:Router) { }
  loginUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken():String|null{
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    console.log("logged out");
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  userLogin(user: any): Observable<object> {
      console.log(user);
      if(this.getToken()=='abcdefghijklmnopqrstuvwxyz123'){
          alert("You are logged in by Admin please login as user")
          return throwError("PLEASE LOG IN AS USER");
      }
      else{
      return this.httpClient.post(`${this.baseUrl}`,user);
      }
  }
  adminLogin(user: any): Observable<object> {
    console.log(user);
    // if(this.getToken()=='abcdefghijklmnopqrstuvwxyz123'){
    //     alert("You are logged in by Admin please login as user")
    //     return throwError("PLEASE LOG IN AS USER");
    // }
    // else{
    //return of({ name: 'Dheeraj', email: 'admin@loginapp.com' });
    return this.httpClient.post(`${this.baseUrl}`,user);
   // }
}
raisedData(data:string){
this.userName.next(data);
}
raisedRoleData(data:string){
  this.userRole.next(data);
  }
raisedLoggedOutData(){
  this.isloggedOut.next(this.isLoggedIn());
}
}
