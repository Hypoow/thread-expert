/**
 * Test scenarios for isPreloadReducer function
 *
 * - isPreloadReducer function
 *   - should return initial state when given unknown action
 *   - should return isPreload when given by SET_IS_PRELOAD action
 */
import { describe, expect, it } from 'vitest';
import isPreloadReducer from './reducer';
import { ActionType } from './actions';

describe('isPreloadReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN' };
    const nextState = isPreloadReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('should return isPreload when given by SET_IS_PRELOAD action', () => {
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };
    const nextState = isPreloadReducer(initialState, action);
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
