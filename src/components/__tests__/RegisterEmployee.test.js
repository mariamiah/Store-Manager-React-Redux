/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import RegisterEmployee from '../RegisterEmployee';

describe('<RegisterEmployee />', () => {
  it('should render without crashing', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),

    };
    const wrapper = shallow(<RegisterEmployee {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
