import { Post } from '../post';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  id: any;
  post?: Post;

  constructor(private route: ActivatedRoute, private store: Store<{ posts: Post[]}>) { }

  ngOnInit(): void {
    this.getUrlId();
    this.getPost();
  }

  getUrlId(): void{
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getPost(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      res.forEach((post) => {
        if(post.id === this.id){
          this.post = post;
        }
      })
    })
  }

}
