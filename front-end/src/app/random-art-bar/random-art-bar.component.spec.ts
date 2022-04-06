import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomArtBarComponent } from './random-art-bar.component';

describe('RandomArtBarComponent', () => {
  let component: RandomArtBarComponent;
  let fixture: ComponentFixture<RandomArtBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomArtBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomArtBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
