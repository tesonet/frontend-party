import { apiMiddleware } from 'redux-api-middleware';
import contentHeaderMiddleware from './contentHeaderMiddleware';

export default [contentHeaderMiddleware, apiMiddleware];
