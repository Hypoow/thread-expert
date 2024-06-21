/**
 * Test scenarios for leaderboardsReducer function
 *
 * - leaderboardsReducer function
 *   - should return initial state when given unknown action
 *   - should return leaderboards when given by RECEIVE_LEADERBOARDS action
 */
import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './actions';

describe('leaderboardsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = leaderboardsReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [{ id: 1, score: 100 }],
      },
    };
    const nextState = leaderboardsReducer(initialState, action);
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
