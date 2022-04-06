import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username?: string = this.currentUser?.username;
  currentUser?: User;

  constructor(private userService : UserService, private user : User) { }

  ngOnInit(): void { 
    this.userService.getByUsername(this.user.username).subscribe( (data: User) => { this.currentUser = data; console.log(this.currentUser); })
  }
}
