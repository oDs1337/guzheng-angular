import { Store } from '@ngrx/store';
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

  constructor(private api: BlogApiService, private sanitizer: DomSanitizer, private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
    this.api.fetchPosts();
    this.fetchPostsStore();
  }

  ngOnDestroy(): void {

  }

  fetchPostsStore(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      this.posts = res;
    })
  }

  safeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  dateFromTimestamp(timestamp: string): string{
    let dateFormat = new Date(parseInt(timestamp));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

  removePost(id: any){
    this.api.removePost(id);
    this.api.fetchPosts();
  }

  editPost(id: any){
    console.log(id);
  }

}
