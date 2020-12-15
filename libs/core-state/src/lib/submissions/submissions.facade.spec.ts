import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SubmissionsEntity } from './submissions.models';
import { SubmissionsEffects } from './submissions.effects';
import { SubmissionsFacade } from './submissions.facade';

import * as SubmissionsSelectors from './submissions.selectors';
import * as SubmissionsActions from './submissions.actions';
import {
  SUBMISSIONS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './submissions.reducer';

interface TestSchema {
  submissions: State;
}

describe('SubmissionsFacade', () => {
  let facade: SubmissionsFacade;
  let store: Store<TestSchema>;
  const createSubmissionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SubmissionsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SUBMISSIONS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SubmissionsEffects]),
        ],
        providers: [SubmissionsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SubmissionsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSubmissions$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(SubmissionsActions.loadSubmissions());

        list = await readFirst(facade.allSubmissions$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSubmissionsSuccess` to manually update list
     */
    it('allSubmissions$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSubmissions$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          SubmissionsActions.loadSubmissionsSuccess({
            submissions: [
              createSubmissionsEntity('AAA'),
              createSubmissionsEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSubmissions$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
