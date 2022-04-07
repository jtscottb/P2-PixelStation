import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-artist-bar',
  templateUrl: './featured-artist-bar.component.html',
  styleUrls: ['./featured-artist-bar.component.css'],
})
export class FeaturedArtistBarComponent implements OnInit {
  @Input() boi?: string | null;
  constructor() {}

  ngOnInit(): void {}
}
