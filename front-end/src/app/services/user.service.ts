import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currUser!: User;

  constructor(private https: HttpClient, private route: Router) { }

  getAll(): Observable<User[]> {
    return this.https.get<User[]>("http://localhost:8090/users");
  }

  getUser(id: number): Observable<User>{ 
    return this.https.get<User>("http://localhost:8090/users/"+id);
  }

  updateUser(id: number, user: User): Observable<User>{ 
    return this.https.put<User>("http://localhost:8090/users/"+id, user);
  }

  registerUser(data: FormData): Observable<User>{ 
    return this.https.post<User>("http://localhost:8090/register", data);
  }

  deleteUser(id: number): Observable<boolean>{ 
    return this.https.delete<boolean>("http://localhost:8090/users/"+id);
  }

  login(username: string, password: string): Observable<User>{
    return this.https.get<any>("http://localhost:8090/login?username="+username+"&password="+password);
  }
  
  setUser(username: string, password: string): void{
    this.login(username, password).subscribe(user => {this.currUser = user; this.route.navigate(['/dashboard'])});
  }

}
