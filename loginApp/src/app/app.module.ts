import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { QuickProductComponent } from './products/quick-product/quick-product.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { PipePipe } from './products/pipe.pipe';
import { SettingService } from './modules/admin/setting.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    QuickProductComponent,
    CreateProductComponent,
    PipePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [ProductService,ProductDetailsComponent,SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
