import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactComponent } from './my-react.component';

describe('MyReactComponent', () => {
  let component: MyReactComponent;
  let fixture: ComponentFixture<MyReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
