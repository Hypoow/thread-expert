/**
 * Test scenarios for threadsReducer function
 *
 * - threadsReducer function
 *   - should return initial state when given unknown action
 *   - should return threads when given by RECEIVE_THREADS action
 *   - should handle CREATE_THREAD action
 *   - should handle UP_VOTE_THREAD action
 *   - should handle DOWN_VOTE_THREAD action
 *   - should handle NEUTRALIZE_VOTE_THREAD action
 */
import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './actions';

describe('threadsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('should return threads when given by RECEIVE_THREADS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [{ id: 1, title: 'Thread' }],
      },
    };
    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should handle CREATE_THREAD action', () => {
    const initialState = [];
    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: { id: 1, title: 'Thread' },
      },
    };
    const nextState = threadsReducer(initialState, action);
    expect(nextState).toContainEqual(action.payload.thread);
  });

  it('should handle UP_VOTE_THREAD action', () => {
    const initialState = [
      { id: 1, title: 'Thread 1', upVotesBy: [], downVotesBy: [] },
      { id: 2, title: 'Thread 2', upVotesBy: [], downVotesBy: [] },
    ];
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: { threadId: 1, userId: 'user123' },
    };
    const nextState = threadsReducer(initialState, action);
    const updatedThread = nextState.find(thread => thread.id === 1);
    expect(updatedThread.upVotesBy).toContain('user123');
  });

  it('should handle DOWN_VOTE_THREAD action', () => {
    const initialState = [
      { id: 1, title: 'Thread 1', upVotesBy: [], downVotesBy: [] },
      { id: 2, title: 'Thread 2', upVotesBy: [], downVotesBy: [] },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: { threadId: 1, userId: 'user123' },
    };
    const nextState = threadsReducer(initialState, action);
    const updatedThread = nextState.find(thread => thread.id === 1);
    expect(updatedThread.downVotesBy).toContain('user123');
  });

  it('should handle NEUTRALIZE_VOTE_THREAD action', () => {
    const initialState = [
      { id: 1, title: 'Thread 1', upVotesBy: ['user123'], downVotesBy: [] },
      { id: 2, title: 'Thread 2', upVotesBy: [], downVotesBy: [] },
    ];
    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD,
      payload: { threadId: 1, userId: 'user123' },
    };
    const nextState = threadsReducer(initialState, action);
    const updatedThread = nextState.find(thread => thread.id === 1);
    expect(updatedThread.upVotesBy).not.toContain('user123');
    expect(updatedThread.downVotesBy).not.toContain('user123');
  });

});
