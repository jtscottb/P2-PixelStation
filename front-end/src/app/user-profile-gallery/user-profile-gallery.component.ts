import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-user-profile-gallery',
  templateUrl: './user-profile-gallery.component.html',
  styleUrls: ['./user-profile-gallery.component.css']
})
export class UserProfileGalleryComponent implements OnInit {

  thumbnails: Post[] = [];
  @Input() id: number = 0;
  @Input() username: string = "";

  constructor(private postSrv: PostService) { }

  getThums(): void{
    this.postSrv.getUserPosts(this.id).subscribe(posts => this.thumbnails = posts);
  }

  ngOnInit(): void {
    this.getThums();
  }


}
