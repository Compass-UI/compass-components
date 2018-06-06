import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThombnailComponent } from './event-thombnail.component';

describe('EventThombnailComponent', () => {
  let component: EventThombnailComponent;
  let fixture: ComponentFixture<EventThombnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThombnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThombnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
