import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFrontdetailsComponent } from './activity-frontdetails.component';

describe('ActivityFrontdetailsComponent', () => {
  let component: ActivityFrontdetailsComponent;
  let fixture: ComponentFixture<ActivityFrontdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFrontdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFrontdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
