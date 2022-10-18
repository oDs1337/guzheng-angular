import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../service/blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private api: BlogApiService) { }

  ngOnInit(): void {
    this.api.updatePosts();
  }

}
