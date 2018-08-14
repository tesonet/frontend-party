/**
 * A simple object containing `localStorage` mock functions for the Jest environment.
 *
 * jsdom 9.12 (used by CRA) does not pack `localStorage` by default. If you find yourself
 * needing additional methods or functionality, please feel free to expand.
 *
 * Mocked manually in `setupTests.js`.
 */
export default {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
};
