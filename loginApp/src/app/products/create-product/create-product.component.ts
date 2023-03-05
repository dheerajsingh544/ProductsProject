import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct: Product = new Product(0,'', 0, '', '', '', '');
  productForm: FormGroup;
  constructor(private productServices: ProductService, private router: Router) {

  }
  ngOnInit(): void {

    this.productForm = new FormGroup({
      pid: new FormControl('',Validators.required),
      name: new FormControl('', [Validators.maxLength(30),Validators.required]),
      stock: new FormControl('', Validators.required),
      expiryDate: new FormControl('',Validators.required),
      heading: new FormControl(' '),
      description: new FormControl(' '),
      imageUrl: new FormControl(' ')

    });
  }
  onSubmit() {

    console.log(this.productForm.get('name').value);
    console.log(this.productForm.get('stock').value);
    console.log(this.productForm.get('expiryDate').value);

    this.newProduct.pid = this.productForm.get('pid').value;
    this.newProduct.name = this.productForm.get('name').value;
    this.newProduct.stock = this.productForm.get('stock').value;
    this.newProduct.expiryDate = this.productForm.get('expiryDate').value;
    this.newProduct.description = this.productForm.get('description').value;
    this.newProduct.url = this.productForm.get('imageUrl').value;
    this.newProduct.heading = this.productForm.get('heading').value;
    this.productServices.add(this.newProduct).subscribe((data)=>{
      console.log("product created");
    });
    this.router.navigate(['product']);

  }
}
