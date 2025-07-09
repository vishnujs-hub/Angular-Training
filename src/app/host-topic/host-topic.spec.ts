import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostTopic } from './host-topic';

describe('HostTopic', () => {
  let component: HostTopic;
  let fixture: ComponentFixture<HostTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostTopic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostTopic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
