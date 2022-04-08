import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-holder',
  templateUrl: './nav-holder.component.html',
  styleUrls: ['./nav-holder.component.css']
})
export class NavHolderComponent implements OnInit {

  constructor(private userSrv: UserService) { }

  onClick(): void{
    this.userSrv.logout();
  }

  ngOnInit(): void {
  }

}
