import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecollaborationComponent } from './deletecollaboration.component';

describe('DeletecollaborationComponent', () => {
  let component: DeletecollaborationComponent;
  let fixture: ComponentFixture<DeletecollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
