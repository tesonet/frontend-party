/* eslint-disable import/prefer-default-export */
import http from './http';

export const get = () => http.get('servers');
