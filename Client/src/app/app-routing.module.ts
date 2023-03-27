import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './Admin/admin.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { DonateComponent } from './main/donate/donate.component';
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'user' ,component: AuthComponent},
  {path: 'admin' ,component: AdminComponent},
  {path:'mycart', component:CartComponent},
  {path:'main', component:MainComponent},
  {path:'footer', component:FooterComponent},
  {path:'donate', component:DonateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
