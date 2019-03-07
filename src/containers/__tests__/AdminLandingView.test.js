/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import AdminLandingView from '../AdminLandingView';

describe('<AdminLandingView />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AdminLandingView />);
    expect(wrapper).toMatchSnapshot();
  });
});
