import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { BlogApiService } from '../service/blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(private api: BlogApiService) { }

  ngOnInit(): void {
    this.api.updatePosts();
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.posts = this.api.getPosts();
    console.log(this.posts[0].youtubeUrl);
  }

}
