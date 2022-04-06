import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8090';
  // user?: User;
  // User: User = {
  //   user_id: undefined,
  //   username: undefined,
  //   password: undefined,
  //   fName: undefined,
  //   lName: undefined,
  //   email: undefined,
  //   role: undefined
  // };

  constructor(private http: HttpClient, private user: User) {  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl+'/users');
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.baseUrl+'/users/'+id);
  }

  getByUsername(uname: string): Observable<any> {
    return this.http.get(this.baseUrl+'/users/?username='+uname);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(this.baseUrl+'/users/'+id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/users/'+id);
  }

  login(user: any): Observable<any> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.baseUrl+'/login', user, config);
  }

  register(user: User): Observable<any> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.baseUrl+'/register', user, config);
  }

  setUser(user: User) {
    this.user = user;
  }
}
