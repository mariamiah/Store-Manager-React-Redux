/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../Home';

describe('<Home />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle errors on failed registration', () => {
    const props = {
      loginState: {
        error: {
          message: 'error',
        },
      },
      LoginAction: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    wrapper.setProps({
      loginState: {
      },
    });
    wrapper.instance().handleErrors(props);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().props.loginState).toEqual({});
  });

  it('should handle change', () => {
    const props = {
      loginState: {
        error: {
          message: 'error',
        },
      },
      LoginAction: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    const event = {
      target: {
        name: 'mia',
      },
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance()).toMatchSnapshot();
  });
  it('should handle submit', () => {
    const props = {
      loginState: {
        error: {
          message: 'error',
        },
      },
      LoginAction: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    const event = {
      target: {
        name: 'mia',
      },
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance()).toMatchSnapshot();
  });
  it('should handle success with admin token', () => {
    const props = {
      loginState: {
        user: {
          message: 'error',
        },
      },
      LoginAction: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    wrapper.setProps({
      loginState: {
        user: {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiQWRtaW4iLCJleHAiOjE1NTIwMTM4MDcsInJvbGVzIjpbIkFkbWluIl19.FLwsnsZnQWBC3u18oxvTtMTAqht2crgH4O7W2JM9Ql8',
        },
      },
    });
    wrapper.instance().handleSuccess(props.loginState);
    expect(wrapper.instance()).toMatchSnapshot();
  });
  it('should handle success with attendant token', () => {
    const props = {
      loginState: {
        user: {
          message: 'error',
        },
      },
      LoginAction: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    wrapper.setProps({
      loginState: {
        user: {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibWltaSIsImV4cCI6MTU1MjAxNjg2NSwicm9sZXMiOlsiQXR0ZW5kYW50Il19._sriBnI7smmCy6B_vy20LwBGh0vOW-ze1QbBzV5BiL4',
        },
      },
    });
    wrapper.instance().handleSuccess(props.loginState);
    expect(wrapper.instance()).toMatchSnapshot();
  });
});
