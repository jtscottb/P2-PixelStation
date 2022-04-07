import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  data: FormData = new FormData();
  title: string = '';
  descript: string = '';
  image: Blob = new Blob;
  id: string = '';


  constructor(private postSrv: PostService, private userSrv: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  onChange(event: any){
    this.image = event.target.files[0];
    this.data.append("photo", this.image);
  }

  onSubmit(){
    this.data.append("title", this.title);
    this.data.append("descript", this.descript);
    if(this.userSrv.currUser){
      this.id = this.userSrv.currUser.user_id.toString();
    }
    this.data.append("id", this.id);
    this.postSrv.post(this.data).subscribe(()=>{this.route.navigate(['/dashboard'])});
  }

}
