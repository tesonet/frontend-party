module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["dist", '.tmp'],

    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: ['**', '!bower_components/**', '!assets/styles/**', '!**/*.css', '!**/*.js'],
        dest: 'dist/'
      }
    },

    rev: {
      files: {
          src: ['dist/**/*.{js,css}', '!dist/js/shims/**']
      }
    },

    useminPrepare: {
      html: 'app/index.html'
    },

    usemin: {
      html: ['dist/index.html']
    },

    uglify: {
      options: {
        report: 'min',
        mangle: false
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          paths: ['app/assets/styles']
        },
        files: {
          "app/app.css": "app/assets/styles/app.less" // destination file and source file
        }
      }
    },
    watch: {
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
        dest: 'dist/tesonetapp.js'
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

    karma: {  
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', '!app/**/*test.js', '!app/bower_components/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-angular-builder');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // builds custom modules tesonetapp.js and replaces dependencies referencies in the index.html AND
  // replaces the long list of custom script imports with a single built file import tesonetapp.js
  //grunt.registerTask ('build_tesonetapp_js', ['angular-builder', 'processhtml']);
  grunt.registerTask('build', [
    'copy', 
    'useminPrepare', 
    'concat', 
    'uglify', 
    'cssmin', 
    'rev', 
    'usemin'
  ]);
  grunt.registerTask('serve', [
    'connect:server', 
    'less', 
    'watch']);
  grunt.registerTask('test', [  
    'jshint',
    'karma'
  ]);
};