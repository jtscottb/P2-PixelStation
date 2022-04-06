import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-post',
  templateUrl: './user-profile-post.component.html',
  styleUrls: ['./user-profile-post.component.css']
})
export class UserProfilePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Can we add a post message and pic in same method?
  add(): void {
  }

  delete(): void {
  }
}
