import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-random-art-bar',
  templateUrl: './random-art-bar.component.html',
  styleUrls: ['./random-art-bar.component.css']
})
export class RandomArtBarComponent implements OnInit {
  thumbnails?: Post[];

  constructor(private postSrv: PostService) { }

  getThums(): void{
    this.postSrv.getAll().subscribe(posts => this.thumbnails = posts);
  }

  ngOnInit(): void {
    this.getThums();
  }

}
