import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatApplication } from './chat-application';

describe('ChatApplication', () => {
  let component: ChatApplication;
  let fixture: ComponentFixture<ChatApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
