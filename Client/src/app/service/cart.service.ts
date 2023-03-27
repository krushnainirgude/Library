import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  public cartItemList : any =[]
  public BookTypeList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor() { }
  getBookType(){
    return this.BookTypeList.asObservable();
  }

  setBookType(BookType : any){
    this.cartItemList.push(...BookType);
    this.BookTypeList.next(BookType);
  }

  addtoCart(BookType : any){
    this.cartItemList.push(BookType);
    this.BookTypeList.next(this.cartItemList);
    this.getTotalRent();
    console.log(this.cartItemList)
  }

  getTotalRent() : number{
    let Book_Rent = 0;
    this.cartItemList.map((a:any)=>{
      Book_Rent += a.total;
    })
    return Book_Rent;
  }

  removeCartItem(BookType: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(BookType.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.BookTypeList.next(this.cartItemList);
  }

  removeAllCartItem(){
    this.cartItemList = []
    this.BookTypeList.next(this.cartItemList);
  }
}