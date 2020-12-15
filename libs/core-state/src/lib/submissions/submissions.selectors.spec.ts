import { SubmissionsEntity } from './submissions.models';
import { State, submissionsAdapter, initialState } from './submissions.reducer';
import * as SubmissionsSelectors from './submissions.selectors';

describe('Submissions Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSubmissionsId = (it) => it['id'];
  const createSubmissionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SubmissionsEntity);

  let state;

  beforeEach(() => {
    state = {
      submissions: submissionsAdapter.setAll(
        [
          createSubmissionsEntity('PRODUCT-AAA'),
          createSubmissionsEntity('PRODUCT-BBB'),
          createSubmissionsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Submissions Selectors', () => {
    it('getAllSubmissions() should return the list of Submissions', () => {
      const results = SubmissionsSelectors.getAllSubmissions(state);
      const selId = getSubmissionsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SubmissionsSelectors.getSelected(state);
      const selId = getSubmissionsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSubmissionsLoaded() should return the current 'loaded' status", () => {
      const result = SubmissionsSelectors.getSubmissionsLoaded(state);

      expect(result).toBe(true);
    });

    it("getSubmissionsError() should return the current 'error' state", () => {
      const result = SubmissionsSelectors.getSubmissionsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
