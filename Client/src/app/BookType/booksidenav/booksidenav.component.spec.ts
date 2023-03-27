import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSidenavComponent } from './booksidenav.component';

describe('BookSidenavComponent', () => {
  let component: BookSidenavComponent;
  let fixture: ComponentFixture<BookSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
