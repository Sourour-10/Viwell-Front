import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReplyComponent } from './list-reply.component';

describe('ListReplyComponent', () => {
  let component: ListReplyComponent;
  let fixture: ComponentFixture<ListReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
