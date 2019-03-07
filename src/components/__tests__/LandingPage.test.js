/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import LandingPage from '../LandingPage';

describe('<LandingPage />', () => {
  it('should render without crashing', () => {
    const props = {
      onSubmit: jest.fn(),
      onClick: jest.fn(),
      onChange: jest.fn(),

    };
    const wrapper = shallow(<LandingPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
