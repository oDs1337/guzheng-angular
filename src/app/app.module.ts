import { postReducer } from './state/post.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BlogComponent } from './blog/blog.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({ posts: postReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
