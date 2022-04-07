import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserServiceComponent } from './admin-user-service.component';

import { AdminNavHolderComponent } from '../admin-nav-holder/admin-nav-holder.component';

describe('AdminUserServiceComponent', () => {
  let component: AdminUserServiceComponent;
  let fixture: ComponentFixture<AdminUserServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserServiceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
