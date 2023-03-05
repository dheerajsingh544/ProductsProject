import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthloginGuard } from './guards/authlogin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { QuickProductComponent } from './products/quick-product/quick-product.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  pathMatch:'full'
  },
  {path:'login',
  component:LoginComponent,
  pathMatch:'full'
  },
  {path:'admin',
  canActivate:[(AuthGuard)],
  loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule),
  },
  {path:'product',
  canActivate:[(AuthloginGuard)],
  component:ProductsComponent,
  pathMatch:'full'
  },
  {
    path:'product/:id',
    canActivate:[(AuthloginGuard)],
    component:ProductDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'product/:id/edit',
    canActivate:[(AuthloginGuard)],
    component:ProductEditComponent,
    pathMatch:'full'
  },
  {path:'QuickCreate',
  canActivate:[AuthloginGuard],
  component:QuickProductComponent,
  pathMatch:'full'
  },
  {path:'createProduct',
  canActivate:[AuthloginGuard],
  component:CreateProductComponent,
  pathMatch:'full'
  },
  {path:'**',
  component:PageNotFoundComponent,
  pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }