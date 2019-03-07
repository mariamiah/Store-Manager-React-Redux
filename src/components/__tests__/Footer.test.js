/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
