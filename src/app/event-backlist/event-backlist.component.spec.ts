import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBacklistComponent } from './event-backlist.component';

describe('EventBacklistComponent', () => {
  let component: EventBacklistComponent;
  let fixture: ComponentFixture<EventBacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBacklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
