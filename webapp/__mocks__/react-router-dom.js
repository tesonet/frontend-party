import React from 'react';

const reactRouterDom = require('react-router-dom');

// Mocks the BrowserRouter component so that it doesn't collide with the MemoryRouter
// that's used in tests.
reactRouterDom.BrowserRouter = ({ children }) => children;

module.exports = reactRouterDom;
