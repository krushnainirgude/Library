import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalitem : number = 0;
  public searchTerm !: string;
private _authservices: any;
  constructor(private cartService : CartService,private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
    
          this.cartService.getBookType()
          .subscribe(res=>{
          this.totalitem=res.length;
          })
        }

        search(event:any){
          this.searchTerm = (event.target as HTMLInputElement).value;
          console.log(this.searchTerm);
          this.cartService.search.next(this.searchTerm);
        }
        logout(){
          this._authservices.removeToken();
          this.router.navigateByUrl('/login');
        }
      }
