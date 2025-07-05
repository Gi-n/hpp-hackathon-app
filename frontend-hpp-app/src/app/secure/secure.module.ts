import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
