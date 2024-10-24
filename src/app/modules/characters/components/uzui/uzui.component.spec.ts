import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzuiComponent } from './uzui.component';

describe('UzuiComponent', () => {
  let component: UzuiComponent;
  let fixture: ComponentFixture<UzuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UzuiComponent]
    });
    fixture = TestBed.createComponent(UzuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
