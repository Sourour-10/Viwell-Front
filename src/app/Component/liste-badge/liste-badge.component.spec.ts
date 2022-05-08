import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBadgeComponent } from './liste-badge.component';

describe('ListeBadgeComponent', () => {
  let component: ListeBadgeComponent;
  let fixture: ComponentFixture<ListeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
