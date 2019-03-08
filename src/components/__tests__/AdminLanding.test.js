/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import AdminLanding from '../AdminLanding';

describe('<AdminLanding />', () => {
  const props = {
    item: {
      category_name: 'Denim',
      date_added: '12/01/2019',
      price: '10000',
      product_code: '123456',
      product_name: 'shorts',
      product_quantity: '10',
    },
  };
  it('should render without crashing', () => {
    const wrapper = shallow(<AdminLanding {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
