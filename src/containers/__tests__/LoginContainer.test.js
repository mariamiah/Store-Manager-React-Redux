/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginContainer from '../LoginContainer';

describe('<LoginContainer />', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore({
      LoginReducer: { user: '', error: 'Invalid username and password' },
    });
  });
  it('should match the snapshot', () => {
    const wrapper = shallow(<Provider store={store}><LoginContainer /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display toast on button click', () => {
    const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>);
    expect(wrapper.find('ToastContainer').length).toEqual(1)
  });
});
