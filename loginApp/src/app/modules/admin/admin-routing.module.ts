import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { ServicesComponent } from './component/setting/setting.component';

const routes: Routes = [{path:'',component:AdminHomeComponent,children:[
  {
      path:'setting',component:ServicesComponent
  },{
    path:'',redirectTo:'',pathMatch:'full'
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
