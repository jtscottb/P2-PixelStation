import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-nav-holder',
  templateUrl: './nav-holder.component.html',
  styleUrls: ['./nav-holder.component.css']
})
export class NavHolderComponent implements OnInit {
  user: User = this.userService.currUser;

  constructor(
    private userService: UserService
    ) { }

  ngOnInit(): void {
    // this.userService.getCurrUser().subscribe( (obj: User) => {this.user = obj} )
  }

}
