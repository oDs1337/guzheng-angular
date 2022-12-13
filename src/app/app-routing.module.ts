import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'add-record', loadChildren:
   () => import('./add-record/add-record.module').then(m => m.AddRecordModule)},
  { path: 'post/:id/edit', loadChildren:
   () => import('./edit-record/edit-record.module').then(m => m.EditRecordModule) },
  { path: 'post/:id', loadChildren:
   () => import('./single-post/single-post.module').then(m => m.SinglePostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
