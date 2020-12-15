import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SUBMISSIONS_FEATURE_KEY,
  State,
  SubmissionsPartialState,
  submissionsAdapter,
} from './submissions.reducer';

// Lookup the 'Submissions' feature state managed by NgRx
export const getSubmissionsState = createFeatureSelector<
  SubmissionsPartialState,
  State
>(SUBMISSIONS_FEATURE_KEY);

const { selectAll, selectEntities } = submissionsAdapter.getSelectors();

export const getSubmissionsLoaded = createSelector(
  getSubmissionsState,
  (state: State) => state.loaded
);

export const getSubmissionsError = createSelector(
  getSubmissionsState,
  (state: State) => state.error
);

export const getAllSubmissions = createSelector(
  getSubmissionsState,
  (state: State) => selectAll(state)
);

export const getSubmissionsEntities = createSelector(
  getSubmissionsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSubmissionsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSubmissionsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
