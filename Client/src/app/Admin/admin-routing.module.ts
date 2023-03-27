import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateBooksComponent } from './donate-books/donatebooks.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';

import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManageFineComponent } from './manage-fine/manage-fine.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SideNavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {path: 'adminheader', component: AdminHeaderComponent},
    {path: 'sidenav', component: SideNavComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'myprofile', component: MyProfileComponent},
    {path: 'managebooks', component: ManageBooksComponent},
    {path: 'managefine', component: ManageFineComponent},
    {path: 'issuebooks', component: IssueBooksComponent},
    {path: 'donatebooks', component: DonateBooksComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
