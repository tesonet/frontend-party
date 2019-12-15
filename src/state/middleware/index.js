import { apiMiddleware } from 'redux-api-middleware';
import contentHeaderMiddleware from './contentHeaderMiddleware';
import endpointMiddleware from './endpointMiddleware';

export default [endpointMiddleware, contentHeaderMiddleware, apiMiddleware];
