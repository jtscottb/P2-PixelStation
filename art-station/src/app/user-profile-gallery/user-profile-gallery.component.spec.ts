import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileGalleryComponent } from './user-profile-gallery.component';

describe('UserProfileGalleryComponent', () => {
  let component: UserProfileGalleryComponent;
  let fixture: ComponentFixture<UserProfileGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
