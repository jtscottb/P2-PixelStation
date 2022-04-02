import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }
  
  ngOnInit(): void { }

  message: string = '';
  onSubmit(uname: string, pword: string, email: string) {
    console.log(uname + " " + pword + " " + email);

    this.message = 'Username is already taken.';
  }

}
