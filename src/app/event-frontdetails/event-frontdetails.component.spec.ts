import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFrontdetailsComponent } from './event-frontdetails.component';

describe('EventFrontdetailsComponent', () => {
  let component: EventFrontdetailsComponent;
  let fixture: ComponentFixture<EventFrontdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFrontdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFrontdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
