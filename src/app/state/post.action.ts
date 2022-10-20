import { Post } from "../post";
import { createAction, props } from "@ngrx/store";

export const fetch = createAction('[BLOG] fetch', props<{posts: Post[]}>());
export const create = createAction('[BLOG] create', props<{index: number}>());
export const remove = createAction('[BLOG] remove', props<{index: number}>());
export const update = createAction('[BLOG] update', props<{index: number}>());

