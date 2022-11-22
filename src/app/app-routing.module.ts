import { Post } from 'src/app/post';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'add-record', component: AddRecordComponent },
  { path: 'post/:id/edit', component: EditRecordComponent, data: {
    id: '',
    author: '',
    title: '',
    content: '',
    creationDate: '',
    imageUrlLarge: '',
    imageUrlSmall: '',
    youtubeUrl: '',
    upVotes: 0,
    downVotes: 0} },
  { path: 'post/:id', component: SinglePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
