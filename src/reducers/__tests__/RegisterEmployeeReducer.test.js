/* eslint-disable no-undef */

import RegisterEmployeesReducer from '../RegisterEmployeeReducer';

const initialState = {};
describe('Registration Reducer', () => {
  it('should return initial state', () => {
    expect(RegisterEmployeesReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle REGISTER_EMPLOYEE_SUCCESS', () => {
    const action = {
      type: 'REGISTER_EMPLOYEE_SUCCESS',
      payload: 'payload',
    };
    expect(RegisterEmployeesReducer(initialState, action)).toEqual({
      payload: 'payload',
    });
  });
  it('should handle REGISTER_EMPLOYEE_FAIL', () => {
    const action = {
      type: 'REGISTER_EMPLOYEE_FAIL',
      error: 'error',
    };
    expect(RegisterEmployeesReducer(initialState, action)).toEqual({
      error: 'error',
    });
  });
});
