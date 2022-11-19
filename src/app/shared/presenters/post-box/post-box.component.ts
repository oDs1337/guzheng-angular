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

  constructor(private sanitizer: DomSanitizer,private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
  }



  safeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  dateFromTimestamp(timestamp: string): string{
    let dateFormat = new Date(parseInt(timestamp));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

}
