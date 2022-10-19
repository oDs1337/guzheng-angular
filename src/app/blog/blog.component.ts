import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { BlogApiService } from '../service/blog-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  postsSubscription?: Subscription;

  constructor(private api: BlogApiService, private sanitizer: DomSanitizer) { }

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

  safeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  dateFromTimestamp(timestamp: string): string{
    let dateFormat = new Date(parseInt(timestamp));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

}
