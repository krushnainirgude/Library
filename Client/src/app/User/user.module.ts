import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from '../Auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
 



  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

})
export class UserModule { }
