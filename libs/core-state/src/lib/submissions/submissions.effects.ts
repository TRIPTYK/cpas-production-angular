import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromSubmissions from './submissions.reducer';
import * as SubmissionsActions from './submissions.actions';

@Injectable()
export class SubmissionsEffects {
  loadSubmissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubmissionsActions.loadSubmissions),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SubmissionsActions.loadSubmissionsSuccess({ submissions: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SubmissionsActions.loadSubmissionsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
