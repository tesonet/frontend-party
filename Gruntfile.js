//is used to configure or define tasks and load Grunt plugins
module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    var conf = {
      projectName:    'tesonet',
      mainModuleName: 'tesonetApp',
      buildPath:      'build',
      srcPath:        'app'
    };
    grunt.initConfig({
      conf: conf,
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        dist: {
          files: [  {src: 'index.html', dest: 'dist/index.html'}
                  ]
        },
        html: {
          expand: true, src: ['app/**/*.html'], dest: 'dist'
        }
      },
      cssmin: {
        options: {
          processImport: false
        }
      },
      less: {
          development: {
              options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2,
                  paths: ['assets/styles']
              },
              files: {
                  "app/app.css": "app/assets/styles/app.less" // destination file and source file
              }
          }
      },
      watch: {
          js: {
              files: ['app/**/**/**/**/**/**/*.js'],
              tasks: ['concat']
          },
          less: {
              files: ['app/assets/styles/*.less'],
              tasks: ['less']
          }
      },
      connect: {
          server: {
              options: {
                  port: 9000,
                  hostname: '*',
                  base: {
                    path: 'app',
                    options: {
                      index: 'index.html'
                    }
                  }
              }
          }
      },
      processhtml: {
        options: {
        },
        dist: {
          files: {
            'dist/index.html': ['dist/index.html']
          }
        }
      }
    });


    // copies htmls
    grunt.registerTask('copy_html', ['copy:html']);

    // gathers static assets, css and external js libraries in /dist
    grunt.registerTask('gather_dependencies', ['less', 'useminPrepare', 'copy:dist', 'concat', 'uglify', 'cssmin', 'usemin']);

    // replaces the long list of custom angularjs script imports with a single built file import yapili.js
    grunt.registerTask('replace_di', ['processhtml']);

    // builds custom angularjs modules yapili.js and replaces dependencies referencies in the index.html
    grunt.registerTask ('build_yapili_js', ['angular-builder', 'replace_di']);
    // grunt.registerTask ('debug', ['angular-builder::debug']);

  //  grunt.registerTask('build', ['copy_html', 'gather_dependencies', 'build_yapili_js']);

    grunt.registerTask('serve', ['connect:server', 'less', 'watch']);
};