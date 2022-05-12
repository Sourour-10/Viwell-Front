import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizFrontComponent } from './list-quiz-front.component';

describe('ListQuizFrontComponent', () => {
  let component: ListQuizFrontComponent;
  let fixture: ComponentFixture<ListQuizFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuizFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuizFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
