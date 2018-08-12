import {
  createActionCreator,
  createReducer,
  IAction,
  ISetByKeyActionPayload,
  set,
  setByKey
} from './redux';

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

  describe('#set', () => {
    it(`should return action's payload`, () => {
      const action: IAction<boolean> = { type: 'TEST', payload: false };

      expect(set(true, action)).toEqual(false);
    });
  });

  describe('#setByKey', () => {
    it('should return `payload.value` when `key` matches `payload.key`', () => {
      const state = 0;
      const action: IAction<ISetByKeyActionPayload<number>> = {
        type: 'TEST',
        payload: { value: 1, key: 'a' }
      };
      const result = setByKey('a')(state, action);

      expect(result).toEqual(1);
    });

    it('should return `state` when `key` does not match `payload.key`', () => {
      const state = 0;
      const action: IAction<ISetByKeyActionPayload<number>> = {
        type: 'TEST',
        payload: { value: 1, key: 'z' }
      };
      const result = setByKey('a')(state, action);

      expect(result).toEqual(state);
    });
  });
});
