import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private postSrv: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  getThums(): void{
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.postSrv.getUserPosts(userId).subscribe(posts => this.thumbnails = posts);
    /* if (this.user) {
      this.postSrv.getUserPosts(this.user.user_id).subscribe(posts => this.thumbnails = posts);
    } */
  }

  ngOnInit(): void {
    this.getThums();
  }

}
