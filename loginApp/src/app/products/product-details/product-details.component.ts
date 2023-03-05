import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SettingService } from 'src/app/modules/admin/setting.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number=0;
  product:Product=new Product(0,"",0,"","","","");
  data:any;
  settingdata:any;
  settingEdit:boolean=true;
  settingRemove:boolean=true;
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router,private settingService:SettingService){

  }
ngOnInit(): void {
  this.route.params
  .subscribe((params:Params)=>
  {
    this.id=+params['id'];
    console.log(params['id']);
    this.productService.getProduct(this.id).subscribe((res)=>
    {
      this.data=JSON.parse(JSON.stringify(res));
      console.log("got 1: "+JSON.stringify(res));
      console.log("got name: "+this.data["name"]);
      this.product.name=this.data["name"];
      this.product.description=this.data["description"];
      this.product.heading=this.data["heading"];
      this.product.stock=this.data["stock"];
      this.product.expiryDate=this.data["expiryDate"];
      this.product.url=this.data["url"];
      this.product.pid=this.data["pid"];

     
    });
    
  });
  this.settingService.getSetting().subscribe(res=>{
    this.settingdata = JSON.parse(JSON.stringify(res));
    this.settingEdit=this.settingdata["allowEdit"];
    this.settingRemove=this.settingdata["allowDelete"];
  
   });
}

onEditProduct(){
  this.router.navigate(['edit'],{relativeTo:this.route});
}
removeProduct(){
  if (confirm("Do you really want to remove this tasty Product!!") == true) {
    this.productService.remove(this.id).subscribe((data)=>{
      console.log("Deleted the item");
    });
    this.router.navigate(['product']);
  } 
 
}
}
