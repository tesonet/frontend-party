import { createActionCreator, createReducer } from './redux';

describe('redux utilities', () => {
  describe('#createActionCreator', () => {
    it('should create action with `type` and `payload` properties', () => {
      const type = 'SET';
      const payload = 1;

      const testActionCreator = createActionCreator('SET');
      const testAction = testActionCreator(payload);

      expect(testAction.type).toEqual(type);
      expect(testAction.payload).toEqual(payload);
    });
  });

  describe('#createReducer', () => {
    it('should successfully map to action type to reducer', () => {
      const setActionType = 'SET';
      const addActionType = 'ADD';
      const defaultState = 1;

      const reducer = createReducer(
        {
          [setActionType]: (_, action) => action.payload,
          [addActionType]: (state, action) => state + action.payload
        },
        defaultState
      );

      const resultOne = reducer(undefined, {
        type: setActionType,
        payload: 10
      });

      expect(resultOne).toEqual(10);

      const resultTwo = reducer(undefined, {
        type: addActionType,
        payload: 10
      });

      expect(resultTwo).toEqual(11);
    });

    it('should return provided defaultState when state is undefined', () => {
      const defaultState = 'test';
      const reducer = createReducer({}, defaultState);
      const result = reducer(undefined, { type: 'test-action' });

      expect(result).toEqual(defaultState);
    });
  });
});
