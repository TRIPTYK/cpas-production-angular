import { createAction, props } from '@ngrx/store';
import { SubmissionsEntity } from './submissions.models';

export const loadSubmissions = createAction('[Submissions] Load Submissions');

export const loadSubmissionsSuccess = createAction(
  '[Submissions] Load Submissions Success',
  props<{ submissions: SubmissionsEntity[] }>()
);

export const loadSubmissionsFailure = createAction(
  '[Submissions] Load Submissions Failure',
  props<{ error: any }>()
);
