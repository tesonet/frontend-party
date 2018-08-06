import * as serve from 'webpack-serve';
import config from '../webpack/webpack.config';

serve(
  {},
  {
    config,
    port: 3000,
    open: true
  }
);
