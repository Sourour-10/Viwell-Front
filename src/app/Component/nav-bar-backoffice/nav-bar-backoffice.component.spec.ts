import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBackofficeComponent } from './nav-bar-backoffice.component';

describe('NavBarBackofficeComponent', () => {
  let component: NavBarBackofficeComponent;
  let fixture: ComponentFixture<NavBarBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
