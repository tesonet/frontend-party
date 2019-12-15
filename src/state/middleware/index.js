import { apiMiddleware } from 'redux-api-middleware';
import contentHeaderMiddleware from './contentHeaderMiddleware';
import endpointMiddleware from './endpointMiddleware';
import authMiddleware from './authMiddleware';

export default [authMiddleware, endpointMiddleware, contentHeaderMiddleware, apiMiddleware];
