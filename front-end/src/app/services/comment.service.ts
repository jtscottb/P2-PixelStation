import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment(data: FormData): Observable<Comment>{
    return this.https.post<Comment>("http://localhost:8090/comment", data);
  }

  getAll(): Observable<Comment[]>{
    return this.https.get<Comment[]>("http://localhost:8090/comments");
  }

  getPostComments(id: number): Observable<Comment[]>{
    return this.https.get<Comment[]>("http://localhost:8090/comments/post/"+id);
  }

  getUserComments(id: number): Observable<Comment[]>{
    return this.https.get<Comment[]>("http://localhost:8090/comments/user/"+id);
  }

  getComment(id: number): Observable<Comment>{
    return this.https.get<Comment>("http://localhost:8090/comment/"+id);
  }

  updateComment(id: number, com: Comment): Observable<Comment>{
    return this.https.put<Comment>("http://localhost:8090/comment/"+id, com);
  }

  deleteComment(id: number): Observable<boolean>{
    return this.https.delete<boolean>("http://localhost:8090/comment/"+id);
  }

  constructor(private https: HttpClient) { }
}
