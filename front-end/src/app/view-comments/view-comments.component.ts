import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
  @Input() post_id?: any;
  comments: Comment[] = [];

  constructor(private comSrv: CommentService) { }

  getComs(): void{
    if(this.post_id){
      console.log("post id is:" + this.post_id);
      this.comSrv.getPostComments(this.post_id).subscribe(comments => this.comments = comments);
    }
  }

  ngOnInit(): void {
    this.comments = [];
    this.getComs();
  }

}
