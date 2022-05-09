import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRreclamationComponent } from './add-rreclamation.component';

describe('AddRreclamationComponent', () => {
  let component: AddRreclamationComponent;
  let fixture: ComponentFixture<AddRreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
