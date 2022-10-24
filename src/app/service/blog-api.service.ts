import { Store } from '@ngrx/store';
import { Subject, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { fetch } from '../state/post.action'

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  #posts: Subject<Post[]> = new Subject();
  #updateUrl = "http://[::1]:3000/blog-posts?filter=%7B%0A%20%20%22offset%22%3A%200%2C%0A%20%20%22limit%22%3A%20100%2C%0A%20%20%22skip%22%3A%200%2C%0A%20%20%22order%22%3A%20%22string%22%2C%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22additionalProp1%22%3A%20%7B%7D%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22author%22%3A%20true%2C%0A%20%20%20%20%22title%22%3A%20true%2C%0A%20%20%20%20%22content%22%3A%20true%2C%0A%20%20%20%20%22creationDate%22%3A%20true%2C%0A%20%20%20%20%22imageUrlLarge%22%3A%20true%2C%0A%20%20%20%20%22imageUrlSmall%22%3A%20true%2C%0A%20%20%20%20%22youtubeUrl%22%3A%20true%2C%0A%20%20%20%20%22upVotes%22%3A%20true%2C%0A%20%20%20%20%22downVotes%22%3A%20true%0A%20%20%7D%0A%7D";
  #apiUrl = "http://[::1]:3000/blog-posts";
  constructor(private http: HttpClient, private store: Store) { }

  fetchPosts(): void{
    this.http.get<Post[]>(this.#updateUrl).subscribe((res) => {
      this.store.dispatch(fetch({ posts: res}))
    })
  }

  // editPost(id: any, data): void{
  //   this.http.put(`${this.#apiUrl}${}`)
  // }

  removePost(id: any){
    this.http.delete(`${this.#apiUrl}${id}`).subscribe();
  }

  createPost(payload: Post){
    this.http.post<Post>(this.#apiUrl, payload)
      .subscribe();
  }

  getPosts(){
    return this.#posts.asObservable();
  }

}
