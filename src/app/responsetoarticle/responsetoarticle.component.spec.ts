import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsetoarticleComponent } from './responsetoarticle.component';

describe('ResponsetoarticleComponent', () => {
  let component: ResponsetoarticleComponent;
  let fixture: ComponentFixture<ResponsetoarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsetoarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsetoarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
