import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      author: ['',[
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

}
