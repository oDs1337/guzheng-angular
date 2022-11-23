import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBoxComponent } from './presenters/post-box/post-box.component';


@NgModule({
  declarations: [
    PostBoxComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    PostBoxComponent
  ]
})
export class SharedModule { }
