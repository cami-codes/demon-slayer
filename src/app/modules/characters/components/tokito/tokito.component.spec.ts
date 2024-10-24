import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokitoComponent } from './tokito.component';

describe('TokitoComponent', () => {
  let component: TokitoComponent;
  let fixture: ComponentFixture<TokitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokitoComponent]
    });
    fixture = TestBed.createComponent(TokitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
