import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { BookSidenavComponent } from './booksidenav/booksidenav.component';
import { BookTypeComponent } from './book-type.component';
import { ComicsComponent } from './comics/comics.component';
import { JuniorCollectionComponent } from './junior-collection/junior-collection.component';

const routes: Routes = [
  {path:'booktype', component:BookTypeComponent,
    children:[
      {path:'comics',component:ComicsComponent},
      {path:'juniorcollection',component:JuniorCollectionComponent},
      {path:'biography',component:BiographyComponent},
      {path:'booksidenav',component:BookSidenavComponent}

    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTypeRoutingModule { }
