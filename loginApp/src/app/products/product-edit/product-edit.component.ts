import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  id:number=0;
  editMode=false;
  productForm:FormGroup;
  data:any;
  product:Product=new Product(0,"",0,"","","","");
  
  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router ){
  }
  
  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;

        if(this.editMode){
          this.productService.getProduct(this.id).subscribe((res)=>
          {
            this.data=JSON.parse(JSON.stringify(res));
            console.log("got 1: "+JSON.stringify(res));
            console.log("got name: "+this.data["name"]);
            
            this.productForm=new FormGroup({
              'pid':new FormControl(this.data["pid"]),
              'name':new FormControl(this.data["name"],[Validators.maxLength(30),Validators.required]),
              'stock':new FormControl(this.data["stock"],Validators.required),
              'description':new FormControl(this.data["description"],Validators.required),
              'title':new FormControl(this.data["heading"],[Validators.maxLength(30),Validators.required]),
              'expiryDate':new FormControl(this.data["expiryDate"],Validators.required),

              'imageUrl':new FormControl(this.data["url"],Validators.required),
            });
          });}
    })
  }

onSubmit(){
  this.product.pid = this.productForm.get('pid').value;
  this.product.name = this.productForm.get('name').value;
  this.product.stock = this.productForm.get('stock').value;
  this.product.expiryDate = this.productForm.get('expiryDate').value;
  this.product.description = this.productForm.get('description').value;
  this.product.url = this.productForm.get('imageUrl').value;
  this.product.heading = this.productForm.get('title').value;
  this.productService.updateProduct(this.product).subscribe((res)=>{
    
  });
  this.router.navigate(['product']);
}
}
