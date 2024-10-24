import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomiokaComponent } from './tomioka.component';

describe('TomiokaComponent', () => {
  let component: TomiokaComponent;
  let fixture: ComponentFixture<TomiokaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomiokaComponent]
    });
    fixture = TestBed.createComponent(TomiokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
