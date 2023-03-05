import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../shared/login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User = new User();
  userRole:string='';

  constructor(private userService: LoginUserService, private route: Router) {

  }
  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      if (this.userService.getToken() == "abcdefghijklmnopqrstuvwxyz123") {
        this.userService.logout();
      }
      else {
        this.route.navigate(['/product']);
      }
    }
  }
  userLogin() {
    console.log(this.user);
    this.userService.userLogin(this.user).subscribe(data => {

      console.log(data["role"]);
      console.log(data["userId"]);
      this.userRole=data["role"];
      this.userService.raisedData(data["userId"]);
      this.userService.raisedRoleData(data["role"]);
      //this.userName=data["userId"];
      //this.userRole=data["role"];

      console.log("login successfully");
      if (data["role"] == "user") {
        this.userService.setToken('abcdefghijklmnopqrstuvwxyz');
        this.route.navigate(['/product']);
        // window.location.reload();
      }
      else {
        this.userService.setToken('abcdefghijklmnopqrstuvwxyz123');
        this.route.navigate(['/admin/setting']);
        // window.location.reload();
      }
    }, error => {
      alert("Sorry!! please enter correct credentials")
    }
    )
  }

}
