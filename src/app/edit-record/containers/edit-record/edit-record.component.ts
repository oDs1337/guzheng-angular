
import { BlogApiService } from 'src/app/service/blog-api.service';
import { Post } from 'src/app/post';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  id: any;
  editForm!: FormGroup;
  post: Post = {
    author: ``,
    title: ``,
    content: ``,
    creationDate: ``,
    imageUrlLarge: ``,
    youtubeUrl: ``,
    upVotes: 0,
    downVotes: 0,
  }

  constructor(private router: Router,private api: BlogApiService, private fb: FormBuilder, private route: ActivatedRoute, private store: Store<{ posts: Post[]}>) { }

  ngOnInit(): void {
    this.getUrlId();
    this.getPost();

    this.editForm = this.fb.group({
      author: [`${this.post?.author}`, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(64),
      ]],
      title: [`${this.post?.title}`,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(18),
      ]],
      content: [`${this.post?.content}`,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]],
      imageUrlLarge: [`${this.post?.imageUrlLarge}`,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]],
      imageUrlSmall: [`${this.post?.imageUrlSmall}`,[
        Validators.maxLength(256),
      ]],
      youtubeUrl: [`${this.post?.youtubeUrl}`,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]]
    })
  }

  get author(){
    this.post.author = `${this.editForm.get("author")?.value}`;
    return this.editForm.get("author") as FormControl;
  }

  get title(){
    this.post.title = `${this.editForm.get("title")?.value}`;
    return this.editForm.get("title") as FormControl;
  }

  get content(){
    this.post.content = `${this.editForm.get("content")?.value}`;
    return this.editForm.get("content") as FormControl;
  }

  get imageUrlLarge(){
    this.post.imageUrlLarge = `${this.editForm.get("imageUrlLarge")?.value}`;
    return this.editForm.get("imageUrlLarge") as FormControl;
  }

  get imageUrlSmall(){
    this.post.imageUrlSmall = `${this.editForm.get("imageUrlSmall")?.value}`;
    return this.editForm.get("imageUrlSmall") as FormControl;
  }

  get youtubeUrl(){
    this.post.youtubeUrl = `${this.editForm.get("youtubeUrl")?.value}`;
    return this.editForm.get("youtubeUrl") as FormControl;
  }

  routeToBlog(): void{
    this.router.navigateByUrl('/blog');
  }

  submitPressed(formData: Post): void{
    formData.id = this.post?.id;
    formData.creationDate = this.post?.creationDate;
    formData.upVotes = this.post!.upVotes;
    formData.downVotes = this.post!.downVotes;
    this.api.editPost(formData);
    this.api.fetchPosts();
    this.routeToBlog();
    alert(`Post of title: ${this.post.title} has been modified successfully!`);
  }

  getUrlId(): void{
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getPost(): void{
    this.store.select((state) => state.posts).subscribe((res) => {
      res.forEach((post) => {
        if(post.id === this.id){
          this.post = {...post};
        }
      })
    })
  }

}
