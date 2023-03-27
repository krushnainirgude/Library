import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
book: any;

public BookType: any=[];
public Total! :number;

constructor(private cartService: CartService) { }                                                                                                                                                  

ngOnInit(): void {
  this.cartService.getBookType()
  .subscribe(res=>{
    this.BookType= res;
    this.Total=this.cartService.getTotalRent();

  })

}
removeItem(item:any){
this.cartService.removeCartItem(item);
}
emptyCart(){
this.cartService.removeAllCartItem();
}
}