/* eslint-disable no-undef */

import LoginReducer from '../LoginReducer';

const initialState = {};
describe('Login Reducer', () => {
  it('should return initial state', () => {
    expect(LoginReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      payload: 'payload',
    };
    expect(LoginReducer(initialState, action)).toEqual({
      user: 'payload',
    });
  });
  it('should handle LOGIN_FAIL', () => {
    const action = {
      type: 'LOGIN_FAIL',
      error: 'error',
    };
    expect(LoginReducer(initialState, action)).toEqual({
      error: 'error',
    });
  });
});
