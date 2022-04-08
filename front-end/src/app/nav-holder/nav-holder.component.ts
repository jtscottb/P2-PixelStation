import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-nav-holder',
  templateUrl: './nav-holder.component.html',
  styleUrls: ['./nav-holder.component.css']
})
export class NavHolderComponent implements OnInit {
  user!: User;

  constructor(private userSrv: UserService) { }

  onClick(): void{
    this.userSrv.logout();
  }

  getCurrUser(): void{
    this.userSrv.getCurrentUser().subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.getCurrUser();
  }

}
