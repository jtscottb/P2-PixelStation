import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  data: FormData = new FormData();
  @Input() post_id: any;
  //user_id: string = "";
  user?: User;
  body: string = "";

  constructor(private comSrv: CommentService, private userSrv: UserService, private route: Router) { }

  /* setUserId(): void{
    if(this.userSrv.currUser){
      this.user_id = this.userSrv.currUser.user_id.toString();
    }
  } */

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.user = user);
  }

  onSubmit(): void{
    this.data.append("post_id", this.post_id);
    if(this.user){
      this.data.append("user_id", this.user.user_id.toString())
    }
    this.data.append("body", this.body);
    this.comSrv.comment(this.data).subscribe(()=>window.location.reload());
  }

  ngOnInit(): void {
    //this.setUserId();
    this.getCurrUser();
  }

}
//this.route.navigate(["/dashboard/`${this.post_id}`"])}