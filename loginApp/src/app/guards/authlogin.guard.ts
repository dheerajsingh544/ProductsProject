import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from '../shared/login-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements CanActivate {
  constructor(private auth:LoginUserService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!this.auth.isLoggedIn()){
        this.router.navigate(['login']);
        return false;
      }
      // else if(this.auth.getToken()=="abcdefghijklmnopqrstuvwxyz123"){
      //   alert("you are logged in as admin please logged in user!!!")
      //   this.router.navigate(['login']);
      //   return false;
      // }
      else{
      return this.auth.isLoggedIn();
      }
  }
  
}
