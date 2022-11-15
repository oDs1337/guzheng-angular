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

  item!: Post;

  @Input() id = '';

  constructor(private sanitizer: DomSanitizer,private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
    this.fetchPostViaId();
  }

  fetchPostViaId(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      res.forEach(element => {
        if(element.id === this.id){
          this.item = element;
        }
      })
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
