/**
 * Test scenarios for authUserReducer function
 *
 * - authUserReducer function
 *   - should return initial state when given unknown action
 *   - should return authUser when given by SET_AUTH_USER action
 *   - should return null when given by UNSET_AUTH_USER action
 */
import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './actions';

describe('authUserReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    const nextState = authUserReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('should return authUser when given by SET_AUTH_USER action', () => {
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };
    const nextState = authUserReducer(initialState, action);
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: ActionType.UNSET_AUTH_USER };
    const nextState = authUserReducer(initialState, action);
    expect(nextState).toBeNull();
  });
});
