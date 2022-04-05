import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHolderComponent } from './nav-holder.component';

describe('NavHolderComponent', () => {
  let component: NavHolderComponent;
  let fixture: ComponentFixture<NavHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
