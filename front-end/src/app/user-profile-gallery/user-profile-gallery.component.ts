import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile-gallery',
  templateUrl: './user-profile-gallery.component.html',
  styleUrls: ['./user-profile-gallery.component.css']
})
export class UserProfileGalleryComponent implements OnInit {

  thumbnails?: Post[];
  user?: User = this.userService.currUser;

  constructor(private postSrv: PostService, private userService: UserService) { }

  getThums(): void{
    if (this.user) {
      this.postSrv.getUserPosts(this.user.user_id).subscribe(posts => this.thumbnails = posts);
    }
  }

  ngOnInit(): void {
    this.getThums();
  }

}
