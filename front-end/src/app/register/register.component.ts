import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: FormData = new FormData();
  message: string = '';
  text: string = '';
  showMessage: boolean = false;
  showUnameMessage: boolean = false;
  showPwordMessage: boolean = false;
  showFnameMessage: boolean = false;
  showLnameMessage: boolean = false;
  showEmailMessage: boolean = false;
  uname: string = '';
  pword: string = '';
  fname: string = '';
  lname: string = '';
  email: string = '';
  file: Blob = new Blob;

  constructor(private userService : UserService) { }
  
  ngOnInit(): void { }

  onChange(event: any){
    this.file = event.target.files[0];
    this.data.append("propic", this.file);
  }

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    this.showFnameMessage = false;
    this.showLnameMessage = false;
    this.showEmailMessage = false;
    if(this.uname == '') {
      this.showUnameMessage = true;
    }
    if(this.pword == '') {
      this.showPwordMessage = true;
    }
    if(this.fname == '') {
      this.showFnameMessage = true;
    }
    if(this.lname == '') {
      this.showLnameMessage = true;
    }
    if(this.email == '') {
      this.showEmailMessage = true;
    }
    
    this.data.append("username", this.uname);
    this.data.append("password", this.pword);
    this.data.append("fname", this.fname);
    this.data.append("lname", this.lname);
    this.data.append("email", this.email);
    this.userService.registerUser(this.data).subscribe(()=>this.userService.setUser(this.uname, this.pword));
  }

}
