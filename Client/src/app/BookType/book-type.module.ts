import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTypeRoutingModule } from './book-type-routing.module';
import { ComicsComponent } from '../BookType/comics/comics.component';
import { JuniorCollectionComponent } from '../BookType/junior-collection/junior-collection.component';
import { BiographyComponent } from './biography/biography.component';
import { BookSidenavComponent } from './booksidenav/booksidenav.component';


@NgModule({
  declarations: [
    ComicsComponent,
    JuniorCollectionComponent,
    BiographyComponent,
    BookSidenavComponent
  ],
  imports: [
    CommonModule,
    BookTypeRoutingModule,
  ]
})
export class BookTypeModule { }
