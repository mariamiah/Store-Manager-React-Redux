/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import AttendantView from '../AttendantView';

describe('<AttendantView />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AttendantView />);
    expect(wrapper).toMatchSnapshot();
  });
});
