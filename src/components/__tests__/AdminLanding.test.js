/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import AdminLanding from '../AdminLanding';

describe('<AdminLanding />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AdminLanding />);
    expect(wrapper).toMatchSnapshot();
  });
});
