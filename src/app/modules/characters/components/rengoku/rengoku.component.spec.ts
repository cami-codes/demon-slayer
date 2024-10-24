import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RengokuComponent } from './rengoku.component';

describe('RengokuComponent', () => {
  let component: RengokuComponent;
  let fixture: ComponentFixture<RengokuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RengokuComponent]
    });
    fixture = TestBed.createComponent(RengokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
