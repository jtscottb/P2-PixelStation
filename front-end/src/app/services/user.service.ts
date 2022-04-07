import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, elementAt, map, Observable } from 'rxjs';
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
//TODO: This function requires a backend change, wait before using it
  deleteUser(id: number): Observable<boolean>{ 
    return this.https.delete<boolean>("http://localhost:8090/users/"+id);
  }
//TODO: This function requires a backend change, wait before using it
  login(username: string, password: string): Observable<User>{
    return this.https.get<any>("http://localhost:8090/login?username="+username+"&password="+password);
  }
 //TODO: This function requires a backend change, wait before using it
  register(user: User): Observable<User> {
    /* var success: boolean;
    this.getAll().subscribe(
      (obj: User[]) => {
        for(const element of obj) {
          if(element.username == user.username) {
            success = false;
            break;
          } else {
            success = true;
            return this.https.post<User>("http://localhost:8090/register", user);
          }
        }
        return success;
      }
    )
    return success; */
    return this.https.post<User>("http://localhost:8090/register", user);
  }
//TODO: This function requires a backend change, wait before using it
  setUser(username: string, password: string): void {
    this.login(username, password).subscribe(user => this.currUser = user);
  }

}
