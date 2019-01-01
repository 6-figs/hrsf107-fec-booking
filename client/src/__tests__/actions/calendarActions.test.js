/* eslint-env jest */
import * as actions from '../../actions/calenderActions';
import { generateCalendarState } from '../../components/utilities/utils';

describe('Calendar Actions', () => {
  it('should toggle the check in calendar', () => {
    const expectedAction = {
      type: 'TOGGLE_CHECK_IN',
      isDisplayed: true,
    };
    expect(actions.toggleCheckInCalendar(true)).toEqual(expectedAction);
  });

  it('should toggle the check out calendar', () => {
    const expectedAction = {
      type: 'TOGGLE_CHECK_OUT',
      isDisplayed: true,
    };
    expect(actions.toggleCheckOutCalendar(true)).toEqual(expectedAction);
  });

  it('should set the check in calendar to the input date', () => {
    const date = new Date();
    const expectedAction = {
      type: 'SELECT_CHECK_IN',
      checkIn: date,
    };
    expect(actions.selectCheckInDate(date)).toEqual(expectedAction);
  });

  it('should take the input date and generate the month, year and calendar state', () => {
    const date = new Date('December 25, 2018');
    const expectedAction = {
      type: 'LOAD_CALENDAR',
      month: 'December',
      year: 2018,
      state: generateCalendarState('December', 2018),
    };
    expect(actions.getCurrentDate(date)).toEqual(expectedAction);
  });

  it('should set the check out calendar to the input date', () => {
    const date = new Date();
    const expectedAction = {
      type: 'SELECT_CHECK_OUT',
      checkOut: date,
    };
    expect(actions.selectCheckOutDate(date)).toEqual(expectedAction);
  });

  it('should generate the month, year and state of the previous input month', () => {
    const expectedAction = {
      type: 'PREVIOUS_MONTH',
      month: 'September',
      year: 2018,
      state: generateCalendarState('September', 2018),
    };
    expect(actions.getPreviousMonth('October', 2018)).toEqual(expectedAction);
  });

  it('should generate the month, year and state of the previous input month and adjust year if January', () => {
    const expectedAction = {
      type: 'PREVIOUS_MONTH',
      month: 'December',
      year: 2017,
      state: generateCalendarState('December', 2017),
    };
    expect(actions.getPreviousMonth('January', 2018)).toEqual(expectedAction);
  });

  it('should generate the month, year and state of the next input month', () => {
    const expectedAction = {
      type: 'NEXT_MONTH',
      month: 'April',
      year: 2018,
      state: generateCalendarState('April', 2018),
    };
    expect(actions.getNextMonth('March', 2018)).toEqual(expectedAction);
  });

  it('should generate the month, year and state of the next input month and update year if December', () => {
    const expectedAction = {
      type: 'NEXT_MONTH',
      month: 'January',
      year: 2019,
      state: generateCalendarState('January', 2019),
    };
    expect(actions.getNextMonth('December', 2018)).toEqual(expectedAction);
  });

  it('should update the date with the provided date', () => {
    const date = new Date();
    const expectedAction = {
      type: 'HOVER_DATE',
      date,
    };
    expect(actions.hoverOverCheckOutDate(date)).toEqual(expectedAction);
  });
});
