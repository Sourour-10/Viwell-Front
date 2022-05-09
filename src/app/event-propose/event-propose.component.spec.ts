import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProposeComponent } from './event-propose.component';

describe('EventProposeComponent', () => {
  let component: EventProposeComponent;
  let fixture: ComponentFixture<EventProposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventProposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
