import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitsuriComponent } from './mitsuri.component';

describe('MitsuriComponent', () => {
  let component: MitsuriComponent;
  let fixture: ComponentFixture<MitsuriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MitsuriComponent]
    });
    fixture = TestBed.createComponent(MitsuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
