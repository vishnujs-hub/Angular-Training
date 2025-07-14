import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableBookSearch } from './observable-book-search';

describe('ObservableBookSearch', () => {
  let component: ObservableBookSearch;
  let fixture: ComponentFixture<ObservableBookSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableBookSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableBookSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
