/* eslint-disable import/prefer-default-export */
export const loginSuccessActionCreator = payload => ({
  type: 'LOGIN_SUCCESS',
  payload,
});
export const loginFailActionCreator = error => ({
  type: 'LOGIN_FAIL',
  error,
});
