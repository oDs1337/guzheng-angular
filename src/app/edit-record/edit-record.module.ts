import { SharedModule } from './../shared/shared.module';
import { EditRecordComponent } from './containers/edit-record/edit-record.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRecordRoutingModule } from './edit-record-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EditRecordComponent,
  ],
  imports: [
    CommonModule,
    EditRecordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
  ]
})
export class EditRecordModule { }
