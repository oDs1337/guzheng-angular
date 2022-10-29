import { Post } from "../post";
import { createAction, props } from "@ngrx/store";

export const fetch = createAction('[BLOG] fetch', props<{posts: Post[]}>());

