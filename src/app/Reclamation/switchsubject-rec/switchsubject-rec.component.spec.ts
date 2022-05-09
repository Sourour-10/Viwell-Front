import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchsubjectRecComponent } from './switchsubject-rec.component';

describe('SwitchsubjectRecComponent', () => {
  let component: SwitchsubjectRecComponent;
  let fixture: ComponentFixture<SwitchsubjectRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchsubjectRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchsubjectRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
