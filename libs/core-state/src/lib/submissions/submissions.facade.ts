import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromSubmissions from './submissions.reducer';
import * as SubmissionsSelectors from './submissions.selectors';

@Injectable()
export class SubmissionsFacade {
  loaded$ = this.store.pipe(select(SubmissionsSelectors.getSubmissionsLoaded));
  allSubmissions$ = this.store.pipe(
    select(SubmissionsSelectors.getAllSubmissions)
  );
  selectedSubmissions$ = this.store.pipe(
    select(SubmissionsSelectors.getSelected)
  );

  constructor(private store: Store<fromSubmissions.SubmissionsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
