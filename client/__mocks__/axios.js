/* eslint-env jest */
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  patch: jest.fn(() => Promise.resolve({ date: {} })),
};
