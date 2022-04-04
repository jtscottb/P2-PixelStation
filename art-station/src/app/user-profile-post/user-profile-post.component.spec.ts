import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePostComponent } from './user-profile-post.component';

describe('UserProfilePostComponent', () => {
  let component: UserProfilePostComponent;
  let fixture: ComponentFixture<UserProfilePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
