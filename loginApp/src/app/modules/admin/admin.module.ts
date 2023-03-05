import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ServicesComponent } from './component/setting/setting.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingService } from './setting.service';
import { HttpClientModule, HttpParams } from '@angular/common/http';


@NgModule({
  declarations: [
    ServicesComponent,
    AdminHomeComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SettingService]
})
export class AdminModule { }
