import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFrontlistComponent } from './event-frontlist.component';

describe('EventFrontlistComponent', () => {
  let component: EventFrontlistComponent;
  let fixture: ComponentFixture<EventFrontlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFrontlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFrontlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
