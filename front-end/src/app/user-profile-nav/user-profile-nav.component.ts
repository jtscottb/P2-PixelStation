import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile-nav',
  templateUrl: './user-profile-nav.component.html',
  styleUrls: ['./user-profile-nav.component.css']
})
export class UserProfileNavComponent implements OnInit {
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

}
