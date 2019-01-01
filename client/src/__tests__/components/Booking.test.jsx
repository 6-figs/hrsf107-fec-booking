/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Booking from '../../components/Booking';
import CalendarContainer from '../../containers/CalendarContainer';
import Total from '../../components/Total';

describe('Booking render behavior', () => {
  it('should render loading if there is no data to be found', () => {
    const props = {
      getData: jest.fn(),
    };
    const wrapper = shallow(<Booking {...props} />);
    expect(wrapper.find('p').text()).toBe('Loading...');
  });

  it('should render the booking bar if data is found ', () => {
    const props = {
      getData: jest.fn(),
      price: 100,
    };

    const wrapper = shallow(<Booking {...props} />);
    expect(wrapper.find('#booking-bar').length).toBe(1);
  });

  it('should render the calendar if show calendar flags are true', () => {
    const props = {
      getData: jest.fn(),
      price: 100,
      showCheckInCalendar: true,
    };

    const wrapper = shallow(<Booking {...props} />);
    expect(wrapper.find(CalendarContainer).length).toBe(1);
  });

  it('should render the total if checkInDate and checkOutDates are dates', () => {
    const props = {
      getData: jest.fn(),
      price: 100,
      checkInDate: new Date(),
      checkOutDate: new Date(),
      serviceFee: 100,
      cleaningFee: 100,
    };
    const wrapper = shallow(<Booking {...props} />);
    expect(wrapper.find(Total).length).toBe(1);
  });
});
