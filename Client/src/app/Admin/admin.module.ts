import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManageFineComponent } from './manage-fine/manage-fine.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
@NgModule({
  declarations: [
    AdminComponent,
    SideNavComponent,
    DashboardComponent,
    AdminHeaderComponent,
    MyProfileComponent,
    ManageBooksComponent,
    ManageFineComponent,
    IssueBooksComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
