import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user?: User;

  constructor(private userService : UserService) {}

  getCurrUser(): void{
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.getCurrUser();
  }
}
