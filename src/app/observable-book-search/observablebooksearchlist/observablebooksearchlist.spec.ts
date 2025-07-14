import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observablebooksearchlist } from './observablebooksearchlist';

describe('Observablebooksearchlist', () => {
  let component: Observablebooksearchlist;
  let fixture: ComponentFixture<Observablebooksearchlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Observablebooksearchlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observablebooksearchlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
