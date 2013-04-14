/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! TEDxTeguigalpa - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://revls.alejo.in/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'Alejandro Morales; Licensed MIT */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      vendor: {
        options: {
          separator: ';',
        },
        src: [
          'components/moment/min/moment.min.js',
          'components/moment/min/lang/es.js',
          'components/quojs/quo.debug.js',
          'components/lungo/lungo.js'
        ],
        dest: 'build/vendor.js'

      },
      lungo: {
        src: [
          'components/lungo/lungo.css',
          'components/lungo/lungo.icon.css',
          'components/lungo/lungo.icon.brand.css',
          'components/lungo/lungo.css',
          'components/lungo/theme.lungo.css'
        ],
        dest: 'build/vendor.css'
      },
      css: {
        src: ['css/**/*.css'],
        dest: 'build/app.css'
      },
      html: {
        options: {
          banner: '<!-- <%= banner %> -->',
          stripBanners: true
        },
        src: [
          'templates/layout.html',
        ],
        dest: 'index.html'
      },
      js: {
        options :{
          separator: ';'
        },
        src: [
          'js/helpers.js',
          'js/tedx.js',
          'js/instagram.js',
          'js/calendar.js',
          'js/timeline.js',
          'js/index.js'
        ],
        dest: 'build/app.js'
      }
    },
    watch: {
      html: {
        files: 'templates/**/*.jade',
        tasks: ['jade', 'concat:html', 'dhtml']
      },
      css: {
        files: 'css/**/*.css',
        tasks: ['concat:css']
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['concat:js']
      }
    },
    jade: {
      options: {
        pretty: true
      },
      html: {
        src: ['templates/layout.jade'],
        dest: 'templates',
        options: {
          client: false,
          // basePath: 'html/jade'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-esmangle');
  grunt.loadNpmTasks('grunt-jade');
  grunt.registerTask('dhtml', 'delete html from repo', function (){
    var done = this.async()
    var fs = require('child_process').exec
    fs('rm -r templates/*.html', function (){
      done()
    })
  })
  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
