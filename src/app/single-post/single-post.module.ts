import { SinglePostComponent } from './containers/single-post/single-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePostRoutingModule } from './single-post-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SinglePostComponent,
  ],
  imports: [
    CommonModule,
    SinglePostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class SinglePostModule { }
