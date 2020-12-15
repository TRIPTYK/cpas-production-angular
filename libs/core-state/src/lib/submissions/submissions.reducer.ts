import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as SubmissionsActions from './submissions.actions';
import { SubmissionsEntity } from './submissions.models';

export const SUBMISSIONS_FEATURE_KEY = 'submissions';

export interface State extends EntityState<SubmissionsEntity> {
  selectedId?: string | number; // which Submissions record has been selected
  loaded: boolean; // has the Submissions list been loaded
  error?: string | null; // last known error (if any)
}

export interface SubmissionsPartialState {
  readonly [SUBMISSIONS_FEATURE_KEY]: State;
}

export const submissionsAdapter: EntityAdapter<SubmissionsEntity> = createEntityAdapter<
  SubmissionsEntity
>();

export const initialState: State = submissionsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const submissionsReducer = createReducer(
  initialState,
  on(SubmissionsActions.loadSubmissions, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SubmissionsActions.loadSubmissionsSuccess, (state, { submissions }) =>
    submissionsAdapter.setAll(submissions, { ...state, loaded: true })
  ),
  on(SubmissionsActions.loadSubmissionsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return submissionsReducer(state, action);
}
