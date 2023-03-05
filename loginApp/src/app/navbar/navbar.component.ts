import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { SettingService } from '../modules/admin/setting.service';
import { LoginUserService } from '../shared/login-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn:boolean;
  loginData:LoginComponent;
  data:any;
  settingCreate:boolean=true;
  userName:string='';
  userRole:string='';
  isUserRole:boolean=false;
  constructor(private auth:LoginUserService,private settingService:SettingService, private router:Router){

  }
  ngOnInit(): void {
    
    this.router.events.pipe(
      filter((event:RouterEvent)=> event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.fetchData();
     
    })
    
  }  
  
  
logout():void{
  this.auth.logout();
  this.isUserRole=false;
}
openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

/**
 * This method will fetch data of user Role and user Name
 */
fetchData(){
  if(this.userRole==="admin"){
    this.isUserRole=true;
  }
  else {
    console.log("loged out:");
    if(localStorage.length==0){
      console.log("local size"+localStorage.length);
    this.isUserRole=false;}
  }
  this.isLoggedIn=this.auth.isLoggedIn();
  this.auth.userName.subscribe((res)=>{
    console.log(res);
    this.userName=res;
  });
  this.auth.userRole.subscribe((res)=>{
    console.log(res);
    this.userRole=res;
  });
 
 /**
  * This call will return setting data 
  */
 this.settingService.getSetting().subscribe(res=>{
  this.data = JSON.parse(JSON.stringify(res));
  console.log("get setting data" + JSON.stringify(res));
  if(this.userRole=="user")
  {this.settingCreate=this.data["allowCreate"];}
  else{
    this.settingCreate=true;
  }

 });
}
}
