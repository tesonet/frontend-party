import * as history from 'connect-history-api-fallback';
import * as convert from 'koa-connect';
import * as serve from 'webpack-serve';
import config from '../webpack/webpack.config';

serve(
  {},
  {
    config,
    port: 3000,
    open: true,
    add: app => app.use(convert(history()))
  }
);
