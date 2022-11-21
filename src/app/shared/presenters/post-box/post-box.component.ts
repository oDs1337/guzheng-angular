import { BlogApiService } from './../../../service/blog-api.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/post';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {

  @Input() item: Post = {
    author: "",
    title: "",
    content: "",
    creationDate: "",
    imageUrlLarge: "",
    youtubeUrl: "",
    upVotes: 0,
    downVotes: 0,
  };

  @Input() editButtonHidden: boolean = true;
  @Input() removeButtonHidden: boolean = true;
  @Input() readmoreButtonHidden: boolean = true;


  constructor(private api: BlogApiService,private router: Router ,private sanitizer: DomSanitizer,private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
  }

  editPressed(): void{
    this.router.navigateByUrl(`post/${this.item.id}/edit`);
  }

  removePressed(): void{
    this.api.removePost(this.item.id);
    alert(`Post of title: ${this.item.title} has been removed successfully!`);
    this.routeToBlog();
  }

  routeToBlog(): void{
    this.router.navigateByUrl('/blog');
  }

  safeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  dateFromTimestamp(timestamp: string): string{
    let dateFormat = new Date(parseInt(timestamp));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

  readMore(id: string){
    this.router.navigateByUrl(`post/${id}`);
  }

}
