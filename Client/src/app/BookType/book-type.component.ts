import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-book-type',
  templateUrl: './book-type.component.html',
  styleUrls: ['./book-type.component.css']
})
export class BookTypeComponent implements OnInit{

  public BookTypeList : any ;
  public filterCategory : any
  searchKey:string ="Book_Name";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getBookType()
    .subscribe(res=>{
      this.BookTypeList = res;

      this.BookTypeList.forEach((a:any) => {
        if(a.category ==="comics" || a.category ==="juniorcollection"){
          a.category ="Biography"
        }
        Object.assign(a,{quantity:1,bookrent:a.bookprice});
      });
      console.log(this.BookTypeList)
    });
    
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.BookTypeList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
 }
