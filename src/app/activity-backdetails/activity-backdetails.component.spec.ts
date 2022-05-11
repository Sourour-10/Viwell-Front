import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBackdetailsComponent } from './activity-backdetails.component';

describe('ActivityBackdetailsComponent', () => {
  let component: ActivityBackdetailsComponent;
  let fixture: ComponentFixture<ActivityBackdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityBackdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBackdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
