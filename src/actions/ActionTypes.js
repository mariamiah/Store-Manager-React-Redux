/* eslint-disable import/prefer-default-export */
export const TEST_ACTION = 'TEST_ACTION';
export const testAction = payload => ({
  type: TEST_ACTION,
  payload,
});
