import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-featured-artist-bar',
  templateUrl: './featured-artist-bar.component.html',
  styleUrls: ['./featured-artist-bar.component.css'],
})
export class FeaturedArtistBarComponent implements OnInit {
  user?: User = this.userSrv.currUser;
  thumbnails?: Post[];
  
  constructor(private postSrv: PostService, private userSrv: UserService) {}

  getThums(): void{
    if(this.user){
      this.postSrv.get3UserPosts(this.user.user_id).subscribe(posts => this.thumbnails = posts);
    }
  }

  ngOnInit(): void {
    this.getThums();
  }
}
