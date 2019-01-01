/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Total from '../../components/Total';

describe('Total Component Render Behavior', () => {
  it('should display the total cost of the reservation', () => {
    const props = {
      checkInDate: new Date('January 1, 2019'),
      checkOutDate: new Date('January 3, 2019'),
      price: 100,
      serviceFee: 50,
      cleaningFee: 100,
    };
    const wrapper = shallow(<Total {...props} />);
    expect(wrapper.find('div').get(4)).toEqual(<div>Total: 400</div>);
  });
});
