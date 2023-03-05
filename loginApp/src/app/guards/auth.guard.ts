import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from '../shared/login-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:LoginUserService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    :boolean{
      if(!this.auth.isLoggedIn()){
        this.router.navigate(['login']);
        return false;
      }
      else if(this.auth.getToken()=="abcdefghijklmnopqrstuvwxyz"){
        alert("you are logged is as user please login as admin!!!")
        this.router.navigate(['login']);
        return false;
      }
      else{
      return this.auth.isLoggedIn();
      }
    
  }
  
}
