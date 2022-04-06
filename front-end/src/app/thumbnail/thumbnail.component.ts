import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
   @Input() post!: Post;
   /*
  post: Post = {post_id: 2, title: "Testing", 
  poster: {user_id: 1, username: "CDawg", fname:"Chris", lname:"Davis", email:"Jone@yahoo.com"}, 
  descript: "Just trying out how the post object looks.", likes: 0, dislikes: 0, posted: "4/6/2022"}
  constructor() { }
  */
  ngOnInit(): void {
  }

}
