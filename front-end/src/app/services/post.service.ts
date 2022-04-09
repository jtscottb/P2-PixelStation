import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currPost!: Post;

  constructor(private https: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts");
  }

  getRandPosts(): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts/rand")
  }

  getUserPosts(id: number): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts/"+id);
  }

  get3UserPosts(id: number): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts/top/"+id);
  }

  getPost(id: number): Observable<Post>{
    return this.https.get<Post>("http://localhost:8090/post/"+id);
  }

  post(data: FormData): Observable<Post>{
    return this.https.post<Post>("http://localhost:8090/post", data);
  }

  deletePost(id: number): Observable<boolean>{
    return this.https.delete<boolean>("http://localhost:8090/post/"+id);
  }

  likePost(id: number): void{
    this.https.get("http://localhost:8090/like/"+id).subscribe();
  }

  dislikePost(id: number): void{
    this.https.get("http://localhost:8090/dislike/"+id).subscribe();
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.https.put<Post>("http://localhost:8090/post/"+id, post);
  }

}
