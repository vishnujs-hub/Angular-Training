import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStyle } from './user-style';

describe('UserStyle', () => {
  let component: UserStyle;
  let fixture: ComponentFixture<UserStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
