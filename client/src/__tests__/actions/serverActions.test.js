/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/serverActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Server actions', () => {
  it('should make a get request and dispatch actions', () => {
    const store = mockStore({});
    return store.dispatch(actions.getData(1)).then(() => {
      expect(store.getActions().length).toBe(6);
      expect(store.getActions().pop().type).toBe('SET_SERVICE_FEE');
    });
  });

  global.alert = jest.fn().mockImplementation(string => string);


  it('should make a patch request and then on resolve make another get request', () => {
    const store = mockStore({});
    return store.dispatch(actions.reserveDate(1, {})).then(() => {
      expect(store.getActions().length).toBe(6);
      expect(store.getActions().pop().type).toBe('SET_SERVICE_FEE');
    });
  });
});
