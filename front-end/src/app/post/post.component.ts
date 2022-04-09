import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
 @Input() post!: Post;
 currentUser!: User;
 show: boolean = false;
 disable: boolean = false;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private nav: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.currentUser = this.userService.currUser;
    this.postService.getPost(postId).subscribe(
      (post: Post) => {
        this.post = post;
        this.postService.currPost = post;
        if(this.currentUser.username == this.post.poster.username || this.currentUser.isAdmin) {
          this.show = true;
        }
      }
    );
  }

  like(): void{
    this.postService.likePost(this.post.post_id);
    // window.location.reload();
    this.post.likes += 1;
    this.disable = true;
  }

  dislike(): void{
    this.postService.dislikePost(this.post.post_id);
    // window.location.reload();
    this.post.dislikes += 1;
    this.disable = true;
  }

  delete() {
    console.log(this.post.post_id);
    this.postService.deletePost(this.post.post_id).subscribe(
      status => {
        console.log(status ? 'Post deleted' : 'Delete failed');
        this.nav.navigate(['/dashboard']);
      }
    );
  }
}
