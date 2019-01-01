/* eslint-env jest */
import * as actions from '../../actions/bookingActions';

describe('Booking Actions', () => {
  it('should set the price to the input', () => {
    const price = 100;
    const expectedAction = {
      type: 'SET_PRICE',
      price,
    };
    expect(actions.setPrice(price)).toEqual(expectedAction);
  });

  it('should set starts to the input starts', () => {
    const stars = 1.7;
    const expectedAction = {
      type: 'SET_STARS',
      stars,
    };
    expect(actions.setStars(stars)).toEqual(expectedAction);
  });

  it('should set cleaning fee to the input cleaningFee', () => {
    const cleaningFee = 50;
    const expectedAction = {
      type: 'SET_CLEANING_FEE',
      cleaningFee,
    };
    expect(actions.setCleaningFee(cleaningFee)).toEqual(expectedAction);
  });

  it('should set service fee to the input service fee', () => {
    const serviceFee = 140;
    const expectedAction = {
      type: 'SET_SERVICE_FEE',
      serviceFee,
    };
    expect(actions.setServiceFee(serviceFee)).toEqual(expectedAction);
  });
});
