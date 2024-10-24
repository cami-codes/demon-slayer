import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanemiComponent } from './sanemi.component';

describe('SanemiComponent', () => {
  let component: SanemiComponent;
  let fixture: ComponentFixture<SanemiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanemiComponent]
    });
    fixture = TestBed.createComponent(SanemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
