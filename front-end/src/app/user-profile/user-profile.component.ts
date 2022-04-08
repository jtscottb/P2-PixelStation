import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: number = 1;
  user!: User
  
  constructor(
    private userService : UserService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.userService.getUser(userId).subscribe( (obj: User) => { this.user = obj });
  }

}
