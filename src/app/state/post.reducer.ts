import { createReducer, on, State } from "@ngrx/store";
import { Post } from "../post";
import { fetch } from "./post.action";

export const initialState: Post[] = [];

export const postReducer = createReducer(
  initialState,
  on(fetch, (state, action) => action.posts)
);
