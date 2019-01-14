/**
 * Test route reducer
 */


import { reducer} from '../reducers';

describe('route reducer', () => {
  it('should return the initial state', () => {
    const initialState = { foo: 'bar' };
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
