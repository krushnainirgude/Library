import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './Auth/auth.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { BookTypeComponent } from './BookType/book-type.component';
import { BookTypeModule } from './BookType/book-type.module';
import { FilterPipe } from './Shared/filter.pipe';
import { AdminModule } from './Admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DonateComponent } from './main/donate/donate.component';
import { PrevDirective } from './Shared/prev.directive';
import { NextDirective } from './Shared/next.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
CartComponent,
BookTypeComponent,
FilterPipe,
MainComponent,
FooterComponent,
DonateComponent,
PrevDirective,
NextDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BookTypeModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
      
    ],
  providers: [],
exports:[ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
