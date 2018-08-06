// tslint:disable:no-var-requires
if (process.env.NODE_ENV === 'production') {
  require('./start.prod');
} else {
  require('./start.dev');
}
