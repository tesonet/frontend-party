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
      clean: ["dist", '.tmp'],
      copy: {
        main: {
            expand: true,
            cwd: 'app/',
            src: ['**', '!**/*.js', '!bower_components/**', '!**/*.css'],
            dest: 'dist/'
        },
        dist: {
          files: [  
                  //  {src: '.tmp/concat/libs.js', dest: 'dist/libs.js'},
                    {expand: true, src: ['app/assets/images/**'], dest: 'dist'},
                    {expand: true, src: ['app/assets/styles/*'], dest: 'dist'},
                    {expand: true, src: ['app/**/*.html'], dest: 'dist'},
                   /* {expand: true, cwd: 'bower_components/font-awesome', src: 'fonts/**', dest: 'dist/'},*/

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
      useminPrepare: {
        html: 'app/index.html',
        options: {
          dest: 'dist'
        }
      },
      usemin: {
        html: ['dist/app/index.html']
      },
      jshint: {
          options: {
              reporter: require('jshint-stylish')
          },
          all: ['Gruntfile.js'],
          build: ['Gruntfile.js', 'app/**/**/**/**/**/**/*.js']
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
      'angular-builder': {
        options: {
          mainModule: 'tesonetApp',
          externalModules: [  'ui.router',
                              'angular-storage' ]
        },
        app: {
          src:  'app/**/*.js',
          dest: 'dist/yapili.js'
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
      },
      ngAnnotate: {
        options:{
          separator: ';'
        },
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/concat',
            src: '**/*.js',
            dest: '.tmp/concat'
          }]
        }
      }
    });

    // fixes DI annotations of the external libraries once concat'ed in one file .tmp/concat/lib.js and copies the result to the dist folder without minifying
/*    grunt.registerTask('di_annotate', ['ngAnnotate', 'copy:concated_js']);*/

    // copies htmls
    grunt.registerTask('copy_html', ['copy:html']);

    grunt.registerTask('usemin_task', ['copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);

    // gathers static assets, css and external js libraries in /dist
    grunt.registerTask('gather_dependencies', ['less', 'useminPrepare', 'copy:dist', 'concat', 'uglify', 'cssmin', 'usemin']);

    // replaces the long list of custom angularjs script imports with a single built file import tesonetapp.js
    grunt.registerTask('replace_di', ['processhtml']);

    // builds custom angularjs modules tesonetapp.js and replaces dependencies referencies in the index.html
    grunt.registerTask ('build_tesonetapp_js', ['angular-builder', 'replace_di']);
    // grunt.registerTask ('debug', ['angular-builder::debug']);

    grunt.registerTask('build', ['copy_html', 'gather_dependencies', 'build_tesonetapp_js']);

    grunt.registerTask('jshint', ['jshint:all']);
    grunt.registerTask('serve', ['connect:server', 'less', 'watch']);
};