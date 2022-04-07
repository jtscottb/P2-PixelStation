import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlComponent } from './admin-control.component';

import { AdminNavHolderComponent } from '../admin-nav-holder/admin-nav-holder.component';

describe('AdminControlComponent', () => {
  let component: AdminControlComponent;
  let fixture: ComponentFixture<AdminControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
