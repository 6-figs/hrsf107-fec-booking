/* eslint-env jest */
import * as actions from '../../actions/guestActions';

describe('Guest Bar Actions', () => {
  it('should set the number of guests to the input number', () => {
    expect(actions.decrementAdults(3).quantity).toBe(3);
    expect(actions.decrementChildren(3).quantity).toBe(3);
    expect(actions.decrementInfants(3).quantity).toBe(3);
    expect(actions.incrementAdults(3).quantity).toBe(3);
    expect(actions.incrementChildren(3).quantity).toBe(3);
    expect(actions.incrementInfants(3).quantity).toBe(3);
  });

  it('should set the show guest options flag to the input bool', () => {
    expect(actions.toggleGuestOptions(true).isDisplayed).toBe(true);
  });
});
