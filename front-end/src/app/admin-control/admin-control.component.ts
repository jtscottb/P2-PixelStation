import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {
  post_id_delete: number = 0;
  user_id_delete: number = 0;
  admin!:User;


  constructor(private userSrv: UserService, private postSrv: PostService, private route: Router) { }

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.admin = user);
  }

  deletePost(): void{
    if(this.post_id_delete > 0){
      this.postSrv.deletePost(this.post_id_delete).subscribe(()=> this.route.navigate(["/admin"]));
    }
  }

  deleteUser(): void{
    if(this.user_id_delete > 0){
      this.userSrv.deleteUser(this.user_id_delete).subscribe(()=> this.route.navigate(["/admin"]));
    }
  }

  ngOnInit(): void {
    this.getCurrUser();
  }

}
