/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '../../components/Calendar/Calendar';

describe('Calendar', () => {
  it('should successfully render loading if monthState is not passed', () => {
    const props = {
      loadCalendar: jest.fn(),
      handlePreviousCalendar: jest.fn(),
      handleNextCalendar: jest.fn(),
    };

    const wrapper = shallow(<Calendar {...props} />);
    expect(wrapper.find('p').text()).toBe('loading');
  });

  it('should successfuly render if monthState is passed in', () => {
    const props = {
      loadCalendar: jest.fn(),
      handlePreviousCalendar: jest.fn(),
      handleNextCalendar: jest.fn(),
      monthState: [],
    };
    const wrapper = shallow(<Calendar {...props} />);
    expect(wrapper.find('table').length).toBe(1);
  });
});
