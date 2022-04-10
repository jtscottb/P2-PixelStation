import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-user-service',
  templateUrl: './admin-user-service.component.html',
  styleUrls: ['./admin-user-service.component.css']
})
export class AdminUserServiceComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  viewUsers: boolean = false;
  viewPosts: boolean = false;
  admin!:User;

  constructor(private userSrv: UserService, private postSrv: PostService) { }

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.admin = user);
  }

  getUsers(): void{
    this.userSrv.getAll().subscribe((users) => this.users = users);
  }

  getPost(): void{
    this.postSrv.getAll().subscribe((posts)=>this.posts = posts);
  }

  showUsers(): void{
    this.viewUsers = !this.viewUsers;
  }

  showPosts(): void{
    this.viewPosts = !this.viewPosts;
  }

  ngOnInit(): void {
    this.getCurrUser();
    this.getUsers();
    this.getPost();
  }

}
