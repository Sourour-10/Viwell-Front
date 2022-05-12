import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBacklistComponent } from './activity-backlist.component';

describe('ActivityBacklistComponent', () => {
  let component: ActivityBacklistComponent;
  let fixture: ComponentFixture<ActivityBacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityBacklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
