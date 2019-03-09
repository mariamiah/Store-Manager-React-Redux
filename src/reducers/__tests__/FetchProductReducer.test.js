/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import reducers from '..';
import FetchProductsReducer from '../FetchProductsReducer';

const initialState = {};
describe('reducers state', () => {
  it('returns default state', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({ LoginReducer: { username: '', password: '' }, FetchProductsReducer: { Products: [] } });
  });
  it('should handle FETCH_PRODUCT_SUCCESS', () => {
    const action = {
      type: 'FETCH_PRODUCT_SUCCESS',
      payload: 'payload',
    };
    expect(FetchProductsReducer(initialState, action)).toEqual({
      Products: 'payload',
    });
  });
  it('should handle FETCH_PRODUCT_FAIL', () => {
    const action = {
      type: 'FETCH_PRODUCT_FAIL',
      error: 'error',
    };
    expect(FetchProductsReducer(initialState, action)).toEqual({
      error: 'error',
    });
  });
});
