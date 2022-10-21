import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  newRecordForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
        Validators.maxLength(16),
      ]],
      content: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(256),
      ]],
      creationDate: ['',[
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


  submitPressed(idk: any){

  }

}