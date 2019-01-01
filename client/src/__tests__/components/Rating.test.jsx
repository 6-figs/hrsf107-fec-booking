/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Rating from '../../components/Rating';

describe('Rating Component Render Behavior', () => {
  it('should display 0 stars for the listing when number of stars is undefined', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find('div').text()).toBe('0 stars');
  });
  it('should display the correct stars round down for the listing when number of stars is passed in', () => {
    const wrapper = shallow(<Rating stars={3.7} />);
    expect(wrapper.find('div').text()).toBe('3 stars');
  });
});
