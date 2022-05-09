import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBackdetailsComponent } from './event-backdetails.component';

describe('EventBackdetailsComponent', () => {
  let component: EventBackdetailsComponent;
  let fixture: ComponentFixture<EventBackdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBackdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBackdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
