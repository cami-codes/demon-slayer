import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinobuComponent } from './shinobu.component';

describe('ShinobuComponent', () => {
  let component: ShinobuComponent;
  let fixture: ComponentFixture<ShinobuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShinobuComponent]
    });
    fixture = TestBed.createComponent(ShinobuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
