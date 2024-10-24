import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObanaiComponent } from './obanai.component';

describe('ObanaiComponent', () => {
  let component: ObanaiComponent;
  let fixture: ComponentFixture<ObanaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObanaiComponent]
    });
    fixture = TestBed.createComponent(ObanaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
