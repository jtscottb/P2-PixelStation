import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-to-do-list',
  templateUrl: './admin-to-do-list.component.html',
  styleUrls: ['./admin-to-do-list.component.css']
})
export class AdminToDoListComponent implements OnInit {
  admin!:User;

  constructor(private userSrv: UserService) { }

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.admin = user);
  }

  ngOnInit(): void {
    this.getCurrUser();
  }

}
