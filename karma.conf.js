//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/a0-angular-storage/dist/angular-storage.js',
      'app.js',
      'app_services.js',
      'header/*.js',
      'login/*.js',
/*      'server_list/server_list_service.js',
      'server_list/server_list_service.test.js',*/
      'server_list/*.js'
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
