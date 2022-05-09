import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFrontComponent } from './article-front.component';

describe('ArticleFrontComponent', () => {
  let component: ArticleFrontComponent;
  let fixture: ComponentFixture<ArticleFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
