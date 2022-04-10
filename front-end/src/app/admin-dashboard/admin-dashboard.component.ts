import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  admin!:User;
  
  constructor(private userSrv: UserService) {}

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.admin = user);
  }

  ngOnInit(): void {
    this.getCurrUser();
  }
}
