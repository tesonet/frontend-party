//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/a0-angular-storage/dist/angular-storage.js',
      'app_services.js',
      'login/*.js',
/*      'server_list/*.js',*/
      'login/authentication_service.js',
      'login/authentication_service.test.js',
/*      'header/*.js'*/
    ],

    colors: true,

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
