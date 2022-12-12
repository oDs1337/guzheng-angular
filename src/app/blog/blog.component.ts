import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { BlogApiService } from '../service/blog-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(private api: BlogApiService, private store: Store<{posts: Post[]}>, private router: Router) { }

  ngOnInit(): void {
    this.api.fetchPosts();
    this.fetchPostsStore();
  }

  ngOnDestroy(): void {

  }

  fetchPostsStore(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      this.posts = res.slice().reverse();
    })
  }

  readMore(id: string){
    this.router.navigateByUrl(`post/${id}`);
  }

}
