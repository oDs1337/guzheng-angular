import { SharedModule } from './../shared/shared.module';
import { AddRecordComponent } from './containers/add-record/add-record.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecordRoutingModule } from './add-record-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddRecordComponent,
  ],
  imports: [
    CommonModule,
    AddRecordRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class AddRecordModule { }
