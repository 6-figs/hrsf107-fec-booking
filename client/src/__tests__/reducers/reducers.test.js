/* eslint-env jest */
import reducer from '../../reducers/main';
import * as calendarActions from '../../actions/calenderActions';
import * as guestActions from '../../actions/guestActions';
import * as bookingActions from '../../actions/bookingActions';
import { generateCalendarState } from '../../components/utilities/utils';

describe('Describes Reducers', () => {
  it('should change the state of the check-in calendar', () => {
    expect(reducer({ checkIn: false },
      calendarActions.toggleCheckInCalendar(true)).checkIn).toEqual(true);
    expect(reducer({ checkIn: true },
      calendarActions.toggleCheckInCalendar(false)).checkIn).toEqual(false);
  });

  it('should change the state of the check-out calendar', () => {
    expect(reducer({ checkOut: false },
      calendarActions.toggleCheckOutCalendar(true)).checkOut).toEqual(true);
    expect(reducer({ checkOut: true },
      calendarActions.toggleCheckOutCalendar(false)).checkOut).toEqual(false);
  });

  it('should change the state of the guest option list', () => {
    expect(reducer({ guestOptions: false },
      guestActions.toggleGuestOptions(true)).guestOptions).toEqual(true);
  });

  it('should set the number of adults state to be the input value', () => {
    expect(reducer({ adults: 2 },
      guestActions.decrementAdults(1)).adults).toEqual(1);
  });

  it('should not allow the adult counter to be less than 1', () => {
    expect(reducer({ adults: 2 },
      guestActions.decrementAdults(0)).adults).toEqual(1);
  });

  it('should set the children state to be the input value', () => {
    expect(reducer({ children: 2 },
      guestActions.decrementChildren(1)).children).toEqual(1);
  });

  it('should not allow the children counter to be less than 0', () => {
    expect(reducer({ children: 2 },
      guestActions.decrementChildren(-1)).children).toEqual(0);
  });

  it('should set the infants state to be the input value', () => {
    expect(reducer({ infants: 2 },
      guestActions.decrementInfants(1)).infants).toEqual(1);
  });

  it('should not allow the children counter to be less than 0', () => {
    expect(reducer({ infants: 2 },
      guestActions.decrementInfants(-1)).infants).toEqual(0);
  });

  it('should generate a new state with the input checkInDate as its new value', () => {
    expect(reducer({ checkInDate: new Date('October 31, 2018') },
      calendarActions.selectCheckInDate(new Date('January 1, 2018'))).checkInDate).toEqual(new Date('January 1, 2018'));
  });

  it('should generate a new state with the input checkoutdate as its new value', () => {
    expect(reducer({ checkOutDate: new Date('October 31, 2018') },
      calendarActions.selectCheckOutDate(new Date('January 1, 2018'))).checkOutDate).toEqual(new Date('January 1, 2018'));
  });

  it('should create a new state with the month, year and calendar state', () => {
    const calendarStateJanuary2018 = generateCalendarState('January', 2018);

    expect(reducer({ currentDate: {} },
      calendarActions.getCurrentDate(new Date('January 1, 2018'))).currentDate.state).toEqual(calendarStateJanuary2018);
  });

  it('should generate a new state with the price', () => {
    expect(reducer({ price: null }, bookingActions.setPrice(100)).price).toBe(100);
  });

  it('should generate a new state with the stars', () => {
    expect(reducer({ stars: null }, bookingActions.setStars(3)).stars).toBe(3);
  });

  it('should generate a new state with the cleaningFee', () => {
    expect(reducer({ cleaningFee: null }, bookingActions.setCleaningFee(47)).cleaningFee).toBe(47);
  });

  it('should generate a new state with the serviceFee', () => {
    expect(reducer({ serviceFee: null }, bookingActions.setServiceFee(194)).serviceFee).toBe(194);
  });

  it('should return a state of booked dates', () => {
    const bookedDates = [{ startDate: new Date('January 1, 2019'), endDate: new Date('January 4, 2018') }];
    expect(reducer({ bookedDates: [] },
      bookingActions.setBookedDates(bookedDates)).bookedDates).toEqual(bookedDates);
  });

  it('should generate a state with the hovered date as the value', () => {
    const newDate = new Date();
    expect(reducer({ hoverDate: null },
      calendarActions.hoverOverCheckOutDate(newDate)).hoverDate).toBe(newDate);
  });

  it('should generate a state with the previous month and previous year if January', () => {
    const calendarStateDecember2017 = generateCalendarState('December', 2017);
    expect(reducer({ currentDate: null },
      calendarActions.getPreviousMonth('January', 2018)).currentDate.state).toEqual(calendarStateDecember2017);
  });

  it('should generate a state with the next month and next year if December', () => {
    const calendarStateJanuary2018 = generateCalendarState('January', 2018);
    expect(reducer({ currentDate: null },
      calendarActions.getNextMonth('December', 2017)).currentDate.state).toEqual(calendarStateJanuary2018);
  });
});
