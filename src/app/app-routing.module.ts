import { AddRecordComponent } from './add-record/add-record.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full'},
  { path: 'blog', component: BlogComponent},
  { path: 'add-record', component: AddRecordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
