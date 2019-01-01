/* eslint-env jest */
import { generateCalendarState } from '../../components/utilities/utils';

describe('Generate Calendar State', () => {
  it('should generate the correct number of days in a month', () => {
    const january = generateCalendarState('January', 2012);
    const febuary = generateCalendarState('Febuary', 2011);
    expect(january.filter(row => row.includes(31)).length).toBe(1);
    expect(febuary.filter(row => row.includes(28)).length).toBe(1);
  });

  it('should generate the right day of the week for start date and end date', () => {
    const febuary = generateCalendarState('Febuary', 2032);
    const startWeek = febuary.filter(week => week.includes(1));
    const endWeek = febuary.filter(week => week.includes(29));
    expect(startWeek[0].indexOf(1)).toBe(0);
    expect(endWeek[0].indexOf(29)).toBe(0);
  });
});
