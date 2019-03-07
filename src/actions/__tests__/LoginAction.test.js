/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../LoginAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const loginUrl = `${BASE_URL}/api/v2/auth/login`;

describe('<login Action />', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('successfully logs in a user', () => {
    fetchMock.postOnce(loginUrl, {
      body: { token: 'token string' },
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [{
      type: 'LOGIN_SUCCESS',
      payload: { token: 'token string' },
    }];
    const validData = {
      username: 'admin',
      password: 'Administrator',
    };
    const store = mockStore();
    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('fails to login a user if unauthenticated', () => {
    fetchMock.postOnce(loginUrl, {
      body: { errors: {} },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: 'LOGIN_FAIL',
      error: { errors: {} },
    }];

    const invalidData = {
      email: '',
      password: '',
    };
    const store = mockStore();
    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('is capable of catching errors', () => {
    fetchMock.postOnce(loginUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [];
    const validData = {
      email: 'user@user.com',
      password: 'N0vember',
    };
    const store = mockStore();
    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
