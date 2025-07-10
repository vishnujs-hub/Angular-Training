import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchS } from './booksearch-s';

describe('BooksearchS', () => {
  let component: BooksearchS;
  let fixture: ComponentFixture<BooksearchS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksearchS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksearchS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
