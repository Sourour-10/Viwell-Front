import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBadgeComponent } from './detail-badge.component';

describe('DetailBadgeComponent', () => {
  let component: DetailBadgeComponent;
  let fixture: ComponentFixture<DetailBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
