'use strict';

  var browserSync = require("browser-sync");

// module.exports = function (grunt) {

//   require('load-grunt-tasks')(grunt);


//   grunt.initConfig({
//     watch: {
//         options: {
//             cwd: '/',
//             spawn: false    // This is very important
//         },
//         files: ['*.html', '*.scss','*.js'],
//         tasks: ['sass' , 'bs-inject']
//     },
//     // SASS task config
//     sass: {
//         options: {
//             sourceMap: true
//         },
//         dist: {
//             files: {
//                 '*.css': '*.scss'
//             }
//         }
//     }

//   });


//     // Init BrowserSync manually
//     grunt.registerTask("bs-init", function () {
//         var done = this.async();
//         browserSync({
//          watchTask: true,
//           proxy: "christineguinaudeau.fr/test/"
//           //,reloadDelay: 5000

//         }, function (err, bs) {
//             done();
//         });
//     });

//     // Inject CSS files to the browser
//     grunt.registerTask("bs-inject", function () {
//         browserSync.reload(["main.css"]);
//     });

//     // Launch Browser-sync & watch files
//     grunt.registerTask('default', ['bs-init', 'watch']);

// };


module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({

    // Watch task config
    watch: {
      sass: {
        files: "*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    }
    // inside Gruntfile.js
    // Using the BrowserSync Proxy for your existing website url.
    ,browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          proxy: "christineguinaudeau.fr/test/",
          serveStatic: ['.']
          ,reloadDelay: 5000
        }
      }
    }

  });

  grunt.registerTask('default', ['browserSync', 'watch']);

};