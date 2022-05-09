import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreactCommentComponent } from './addreact-comment.component';

describe('AddreactCommentComponent', () => {
  let component: AddreactCommentComponent;
  let fixture: ComponentFixture<AddreactCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreactCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreactCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
