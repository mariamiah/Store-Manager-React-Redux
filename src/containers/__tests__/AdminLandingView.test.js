import React from 'react';
import { shallow, mount } from 'enzyme';
import { AdminLandingView } from '../AdminLandingView';

describe('<AdminLandingView />', () => {
  it('should render without crashing', () => {
    const props = {
      FetchProductsAction: jest.fn(),
      product: {
        map: jest.fn(),
      },
    };
    const wrapper = shallow(<AdminLandingView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls componentDidMount() lifecycle method', () => {
    const props = {
      product: {
        map: jest.fn(),
      },
      FetchProductsAction: jest.fn(),

    };
    const spy = jest.spyOn(AdminLandingView.prototype, 'componentDidMount');
    const wrapper = mount(<AdminLandingView {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('displays AdminLanding if passed props', () => {
    const props = {
      product: [{}],
      FetchProductsAction: jest.fn(),
    };
    const wrapper = mount(
      <AdminLandingView {...props} key={props.product.id} />,
    );
    expect(wrapper.find('AdminLanding').exists()).toEqual(true);
  });
});
