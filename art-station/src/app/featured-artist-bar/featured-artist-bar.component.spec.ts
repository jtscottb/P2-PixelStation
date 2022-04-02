import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArtistBarComponent } from './featured-artist-bar.component';

describe('FeaturedArtistBarComponent', () => {
  let component: FeaturedArtistBarComponent;
  let fixture: ComponentFixture<FeaturedArtistBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedArtistBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedArtistBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
