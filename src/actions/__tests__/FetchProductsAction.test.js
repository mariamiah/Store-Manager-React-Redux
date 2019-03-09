/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import FetchProductsAction from '../FetchProductsAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const ProductsUrl = `${BASE_URL}/api/v2/products`;

describe('Fetch Products Action', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('fetches a product', () => {
    fetchMock.getOnce(ProductsUrl, {
      headers: { 'content-type': 'application/json' },
      body: {
        Products: [],
      },
    });
    const expectedAction = [{
      type: 'FETCH_PRODUCT_SUCCESS',
      payload: [],
    }];
    const store = mockStore();
    return store.dispatch(FetchProductsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('doesnot fetch a product on fail', () => {
    fetchMock.getOnce(ProductsUrl, {
      headers: { 'content-type': 'application/json' },
      body: {
        errors: 'errors',
      },
    });
    const expectedAction = [{
      type: 'FETCH_PRODUCT_FAIL',
      error: {
        errors: 'errors',
      },
    }];
    const store = mockStore();
    return store.dispatch(FetchProductsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('is capable of catching errors', () => {
    fetchMock.getOnce(ProductsUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [];
    const store = mockStore();
    return store.dispatch(FetchProductsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
