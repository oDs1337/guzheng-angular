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

  constructor(private route: ActivatedRoute, private store: Store<{posts: Post[]}>) { }

  ngOnInit(): void {
    this.getUrlId();
  }

  getUrlId(): void{
    this.idFromUrl = this.route.snapshot.paramMap.get('id');
  }

}
