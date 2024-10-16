import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIconsComponent } from './profile-icons.component';

describe('ProfileIconsComponent', () => {
  let component: ProfileIconsComponent;
  let fixture: ComponentFixture<ProfileIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileIconsComponent]
    });
    fixture = TestBed.createComponent(ProfileIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
