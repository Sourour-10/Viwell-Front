import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleProfileComponent } from './google-profile.component';

describe('GoogleProfileComponent', () => {
  let component: GoogleProfileComponent;
  let fixture: ComponentFixture<GoogleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
