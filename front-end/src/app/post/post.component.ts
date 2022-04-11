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
 data: FormData = new FormData();
 currentUser!: User;
 showDelete: boolean = false;
 showEdit: boolean = false;
 disable: boolean = false;
 title!: string;
 description!: string;
 showSubmit: boolean = false;


  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private nav: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.getCurrUser();
    this.postService.getPost(postId).subscribe(
      (post: Post) => {
        this.post = post;
        if(this.currentUser.username == this.post.poster.username || this.currentUser.isAdmin) {
          this.showDelete = true;
        }
        if(this.currentUser.username == this.post.poster.username) {
          this.showEdit = true;
        }
      }
    );
  }

  like(): void{
    this.postService.likePost(this.post.post_id);
    this.post.likes += 1;
    this.disable = true;
  }

  dislike(): void{
    this.postService.dislikePost(this.post.post_id);
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

  edit() {
    this.showSubmit = true;
  }

  getCurrUser(): void{
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  onSubmit() {
    if(this.title != '') {
      this.data.append("title", this.title);
    }
    if(this.description != '') {
      this.data.append("descript", this.description);
    }
    this.postService.updatePost(this.post.post_id, this.data).subscribe(
      (post: Post) => {
        this.post = post;
        this.showSubmit = false;
      }
    );
  }
}
