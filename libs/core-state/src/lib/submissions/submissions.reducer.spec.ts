import { SubmissionsEntity } from './submissions.models';
import * as SubmissionsActions from './submissions.actions';
import { State, initialState, reducer } from './submissions.reducer';

describe('Submissions Reducer', () => {
  const createSubmissionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SubmissionsEntity);

  beforeEach(() => {});

  describe('valid Submissions actions', () => {
    it('loadSubmissionsSuccess should return set the list of known Submissions', () => {
      const submissions = [
        createSubmissionsEntity('PRODUCT-AAA'),
        createSubmissionsEntity('PRODUCT-zzz'),
      ];
      const action = SubmissionsActions.loadSubmissionsSuccess({ submissions });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
