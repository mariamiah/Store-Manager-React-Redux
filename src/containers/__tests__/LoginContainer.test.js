/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginContainer from '../LoginContainer';
// import jwt from 'jsonwebtoken'

// jest.mock(jwt)
// jwt.verify.mockReturnValue({
//                 roles: ['Admin']
//             })
describe('<LoginContainer />', () => {
  let store;
  const mockStore = configureStore();
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should match the snapshot', () => {
    store = mockStore({
      LoginReducer: { user: '', error: 'Incorrect username or password.' },
    });
    const wrapper = shallow(<Provider store={store}><LoginContainer /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display error toast on button click', () => {
    store = mockStore({
      LoginReducer: { username: '',password:'', error: {message: 'Input username or password'} },
    });
    const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>);
    expect(wrapper.find('ToastContainer').length).toEqual(1)
  });

  it('should display success toast on button click', () => {
    store = mockStore({
      LoginReducer: { username: '',password:'', user: {token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiQWRtaW4iLCJleHAiOjE1NTIwMTM4MDcsInJvbGVzIjpbIkFkbWluIl19.FLwsnsZnQWBC3u18oxvTtMTAqht2crgH4O7W2JM9Ql8'} },
    });
    const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>);
    expect(wrapper.find('ToastContainer').length).toEqual(1);
  })

  it('should redirect to admin dashboard if user is admin', () => {
    store = mockStore({
      LoginReducer: { username: '',password:'', user: {token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiQWRtaW4iLCJleHAiOjE1NTIwMTM4MDcsInJvbGVzIjpbIkFkbWluIl19.FLwsnsZnQWBC3u18oxvTtMTAqht2crgH4O7W2JM9Ql8'} },
    });
    mount(<Provider store={store}><LoginContainer /></Provider>);
    expect(setTimeout).toHaveBeenCalled();

  })
  it('should redirect to attendant dashboard if user is attendant', () => {
    store = mockStore({
      LoginReducer: { username: '',password:'', user: {token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiQXR0ZW5kYW50IiwiZXhwIjoxNTUyMDEzODA3LCJyb2xlcyI6WyJBZG1pbiJdfQ.KM1xMAPRWcxiDIkCPO8V3S5WzMWRt2yUYSmBeciSDlc'} },
    });
    mount(<Provider store={store}><LoginContainer /></Provider>);
    expect(setTimeout).toHaveBeenCalled();
  })

  xit('should change loading text on button click', async() => {
    store = mockStore({
      LoginReducer: { user: '', error: 'Incorrect username or password.' },
    });
    const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>)
    wrapper.find('button').simulate('click')
    console.log(wrapper.debug())
    await expect(wrapper.find('Login...')).toHaveLength(1)
  })

  xit('input field should respond to change', () => {
    const handleChange = jest.fn();
    const event = {
      preventDefault() {},
      target: {name: "username", value: "Admin"}
    };
    store = mockStore({
      LoginReducer: { user: '', error: 'Incorrect username or password.' },
    });
    const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>)
    wrapper.find('input[type="text"]').simulate('change', event)
    expect(handleChange).toBeCalled();
    expect(wrapper.find('input[type="text"]').text()).toBe('foo');

  })


});
