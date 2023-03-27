import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserDataModel } from '../Auth/user-data.model';
import { CartModel } from '../cart/cart.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class ApiService {
  cartItemList: any;

  constructor(private http:HttpClient) { }
  registerdataurl:string="http://localhost:3000/registerdata";
  bookurl:string="http://localhost:3000/book";
  
  
  postRegistationDetails(data:any){
    return this.http.post<any>(this.registerdataurl,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllLogin(){
    return this.http.get<any>(this.registerdataurl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllUser_Data(){
    return this.http.get<UserDataModel>(this.registerdataurl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getBookType(){
    return this.http.get<any>("http://localhost:3000/book")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getMyCart(){
    return this.http.get<CartModel>(this.bookurl)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }

  postBookType(data:any){
    return this.http.post<any>(this.bookurl,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  }  
