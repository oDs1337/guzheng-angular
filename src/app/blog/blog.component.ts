import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { BlogApiService } from '../service/blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  postsSubscription?: Subscription;

  constructor(private api: BlogApiService) { }

  ngOnInit(): void {
    this.api.updatePosts();
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.postsSubscription?.unsubscribe();
  }

  fetchPosts(): void{
    this.postsSubscription = this.api.getPosts()
      .subscribe((res) => {
        this.posts = res;
        console.log(this.posts);
      })
  }

}
