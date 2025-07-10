import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchStore } from './book-search-store';

describe('BookSearchStore', () => {
  let component: BookSearchStore;
  let fixture: ComponentFixture<BookSearchStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSearchStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
