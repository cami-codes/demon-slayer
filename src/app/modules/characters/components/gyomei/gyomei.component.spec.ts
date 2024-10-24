import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyomeiComponent } from './gyomei.component';

describe('GyomeiComponent', () => {
  let component: GyomeiComponent;
  let fixture: ComponentFixture<GyomeiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GyomeiComponent]
    });
    fixture = TestBed.createComponent(GyomeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
