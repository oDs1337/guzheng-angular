import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  idFromUrl: any;
  item!: Post;

  constructor(private route: ActivatedRoute, private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
    this.getUrlId();
    this.fetchPostViaId()
  }

  getUrlId(): void{
    this.idFromUrl = this.route.snapshot.paramMap.get('id');
  }

  fetchPostViaId(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      res.forEach(element => {
        if(element.id === this.idFromUrl){
          this.item = element;
        }
      })
    })
  }

}
