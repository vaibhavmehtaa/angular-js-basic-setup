/* 
 Author: vaibhav mehta
 Description: Only added some basic task to automate.
 git-repo:  https://github.com/vaibhavmehtaa/angular-js-basic-setup
*/

module.exports = function(grunt) {
    grunt.initConfig({
        bower_concat: {
            dist: {
                options: {
                    separator: ';'
                },
                mainFiles: {
                    "jquery": "jquery"
                },
                dest: {
                    js: 'dist/js/vendor.js',
                    css: 'dist/css/vendor.css'
                },
                dependencies: {
                    'angular': 'jquery'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }, {
                    'dist/css/app.css': 'src/scss/app.scss'
                }]
            },
        }
    });



    // Task runner dependencies
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-include-source');

    // Wrap up all commands in single package
    grunt.registerTask('default', ['sass']);
}
