/* eslint-disable no-console */
import webpack from 'webpack';
import config from './webpack/webpack.config.prod';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log('Generating minified bundle. This will take a moment...');

webpack(config).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    console.warn(error);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((jsonErrpr) => console.log(jsonErrpr));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map((warning) => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Your app is compiled in production mode in /build. It\'s ready to roll!');

  return 0;
});
