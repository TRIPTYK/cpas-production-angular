import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SubmissionsEffects } from './submissions.effects';
import * as SubmissionsActions from './submissions.actions';

describe('SubmissionsEffects', () => {
  let actions: Observable<any>;
  let effects: SubmissionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SubmissionsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SubmissionsEffects);
  });

  describe('loadSubmissions$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SubmissionsActions.loadSubmissions() });

      const expected = hot('-a-|', {
        a: SubmissionsActions.loadSubmissionsSuccess({ submissions: [] }),
      });

      expect(effects.loadSubmissions$).toBeObservable(expected);
    });
  });
});
