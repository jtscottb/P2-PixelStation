import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user-profile-gallery',
  templateUrl: './user-profile-gallery.component.html',
  styleUrls: ['./user-profile-gallery.component.css']
})
export class UserProfileGalleryComponent implements OnInit {

  thumbnails?: Post[];

  constructor(private postSrv: PostService) { }

  getThums(): void{
    this.postSrv.getUserPosts().subscribe(posts => this.thumbnails = posts);
  }

  ngOnInit(): void {
    this.getThums();
  }

  deleteThumb(): void {}

}
