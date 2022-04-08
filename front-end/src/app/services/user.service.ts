import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currUser?: User;

  constructor(private https: HttpClient, private route: Router) { }

  getAll(): Observable<User[]> {
    return this.https.get<User[]>("http://localhost:8090/users");
  }

  getUser(id: number): Observable<User>{ 
    return this.https.get<User>("http://localhost:8090/users/"+id);
  }
  //TODO: Need to discuss what they can update
  updateUser(id: number, user: User): Observable<User>{ 
    return this.https.put<User>("http://localhost:8090/users/"+id, user);
  }

  getCurrentUser(): Observable<User>{
    return this.https.get<User>("http://localhost:8090/currentUser");
  }

  getLoggedIn(): Observable<boolean>{
    return this.https.get<boolean>("http://localhost:8090/loggedIn");
  }

  registerUser(data: FormData): Observable<User>{ 
    return this.https.post<User>("http://localhost:8090/register", data);
  }

  deleteUser(id: number): Observable<boolean>{ 
    return this.https.delete<boolean>("http://localhost:8090/users/"+id);
  }

  login(username: string, password: string): Observable<User>{
    return this.https.get<User>("http://localhost:8090/login?username="+username+"&password="+password);
  }

  logout(): void{
    this.https.get("http://localhost:8090/logout").subscribe(()=> this.route.navigate(['/welcome']));
  }

  setUser(username: string, password: string): void{
    this.login(username, password).subscribe(user => {this.currUser = user; this.route.navigate(['/dashboard'])});
  }

  getRand(): Observable<User>{
    return this.https.get<User>("http://localhost:8090/users/rand");
  }
}
