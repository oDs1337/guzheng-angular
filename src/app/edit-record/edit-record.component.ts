import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  test: any = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.test = this.route.snapshot.paramMap.get('id');
  }

}
