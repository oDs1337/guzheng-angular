import { BlogApiService } from './../service/blog-api.service';
import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  newRecordForm!: FormGroup;
  previewPost: Post = {
    author: "",
    title: "",
    content: "",
    creationDate: this.generateTimestamp(),
    imageUrlLarge: "",
    imageUrlSmall: "",
    youtubeUrl: "",
    upVotes: 0,
    downVotes: 0,
  }

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder, private api: BlogApiService) { }

  ngOnInit(): void {
    this.newRecordForm = this.fb.group({
      author: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(64),
      ]],
      title: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(18),
      ]],
      content: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]],
      creationDate: [`${this.generateTimestamp()}`,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(32),
      ]],
      imageUrlLarge: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]],
      imageUrlSmall: ['',[
        Validators.maxLength(256),
      ]],
      youtubeUrl: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]]
    })

  }

  get author(){
    return this.newRecordForm.get("author") as FormControl;
  }

  get title(){
    return this.newRecordForm.get("title") as FormControl;
  }

  get content(){
    return this.newRecordForm.get("content") as FormControl;
  }

  get creationDate(){
    return this.newRecordForm.get("creationDate") as FormControl;
  }

  get imageUrlLarge(){
    return this.newRecordForm.get("imageUrlLarge") as FormControl;
  }

  get imageUrlSmall(){
    return this.newRecordForm.get("imageUrlSmall") as FormControl;
  }

  get youtubeUrl(){
    return this.newRecordForm.get("youtubeUrl") as FormControl;
  }

  generateTimestamp(): string{
    return `${Date.now()}`;
  }

  authorChanged(author: string){
    this.previewPost!.author = author;
  }

  titleChanged(title: string){
    this.previewPost!.title = title;
  }

  contentChanged(content: string){
    this.previewPost!.content = content;
  }

  youtubeChanged(youtubeUrl: string){
    this.previewPost.youtubeUrl = youtubeUrl;
  }

  safeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  dateFromTimestamp(timestamp: string): string{
    let dateFormat = new Date(parseInt(timestamp));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

  submitPressed(formData: any): void{
    formData.upVotes = 0;
    formData.downVotes = 0;
    this.api.createPost(formData);
  }

}
