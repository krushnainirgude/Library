import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DonateComponent } from "./donate/donate.component";
import { MainComponent } from "./main.component";

const routes: Routes = [
      
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }