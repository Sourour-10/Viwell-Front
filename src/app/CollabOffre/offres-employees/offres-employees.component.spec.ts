import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEmployeesComponent } from './offres-employees.component';

describe('OffresEmployeesComponent', () => {
  let component: OffresEmployeesComponent;
  let fixture: ComponentFixture<OffresEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
