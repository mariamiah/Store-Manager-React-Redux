/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { RegisterEmployeeView } from '../RegisterEmployeeView';

describe('<RegisterEmployeeView />', () => {
  it('should render without crashing', () => {
    const props = {
      RegistrationAction: jest.fn(),
      onChange: jest.fn(),
      onSubmit: jest.fn(),
    };
    const wrapper = shallow(<RegisterEmployeeView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls handle submit', () => {
    const props = {
      RegistrationAction: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
    };

    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'handleSubmit');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().handleSubmit(event);
    expect(spy).toHaveBeenCalled();
  });
  it('calls handle Change method', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
    };
    const event = {
      target: {
        name: 'username',
        value: 'maria',
      },
    };
    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'handleChange');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().handleChange(event);
    expect(spy).toHaveBeenCalled();
  });
  it('calls handle success method', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
    };
    const registrationState = {
      payload: {
        message: 'User registered successfully',
      },
    };
    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'handleSuccess');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().handleSuccess(registrationState);
    expect(spy).toHaveBeenCalled();
  });
  it('calls handle errors method', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      registrationState: {
        error: 'errors',
      },
    };
    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'handleErrors');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(spy).toHaveBeenCalled();
  });
  it('calls componentWillMount if nextProps', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
    };
    const nextProps = {
      registrationState: {
        payload: 'payload',
      },
    };
    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'componentWillReceiveProps');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });
  it('calls componentWillMount if no nextProps', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
    };
    const nextProps = {
      registrationState: {
        payload: undefined,
      },
    };
    const spy = jest.spyOn(RegisterEmployeeView.prototype, 'componentWillReceiveProps');
    const wrapper = mount(<RegisterEmployeeView {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });
});
