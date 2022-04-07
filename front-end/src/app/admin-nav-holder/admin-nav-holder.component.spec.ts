import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavHolderComponent } from './admin-nav-holder.component';

describe('AdminNavHolderComponent', () => {
  let component: AdminNavHolderComponent;
  let fixture: ComponentFixture<AdminNavHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNavHolderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
