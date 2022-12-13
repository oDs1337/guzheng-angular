import { MatButtonModule } from '@angular/material/button';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBoxComponent } from './components/post-box/post-box.component';
import { DateTransformationPipe } from './pipes/date-transformation.pipe';


@NgModule({
  declarations: [
    PostBoxComponent,
    DateTransformationPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    PostBoxComponent
  ]
})
export class SharedModule { }
