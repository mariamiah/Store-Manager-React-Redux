/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Header from '../Header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
