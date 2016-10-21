/* 
 Author: vaibhav mehta
 Description: Only added some basic task to automate dev process.
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
                    "jQuery": "jQuery",
                    bootstrap: [
                        'dist/js/bootstrap.js',
                        'dist/css/bootstrap.css'
                    ]
                },
                dest: {
                    js: 'dist/js/_bower.js',
                    css: 'dist/css/_bower.css'
                },
                dependencies: {
                    'angular': ['jQuery']
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
        },
        tags: {
            buildScripts: {
                options: {
                    scriptTemplate: '<script type="text/javascript" src="{{ path }}"></script>',
                    openTag: '<!-- start script template tags -->',
                    closeTag: '<!-- end script template tags -->'
                },
                src: [
                    'dist/js/*.js',
                    'www/**/*.js'
                ],
                dest: 'www/index.html'
            },
            buildLinks: {
                options: {
                    linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}" media="screen"/>',
                    openTag: '<!-- start css template tags -->',
                    closeTag: '<!-- end css template tags -->'
                },
                src: [
                    'dist/css/**/*.css'
                ],
                dest: 'www/index.html'
            }
        },
        // clean: {
        //     build: ['path/to/dir/one', 'path/to/dir/two'],
        //     release: ['path/to/another/dir/one', 'path/to/another/dir/two']
        // },
        copy: {
            images: {
                expand: true,
                cwd: 'src/',
                src: 'images/**',
                dest: 'dist/'
            },
            media: {
                expand: true,
                cwd: 'src/',
                src: 'media/**',
                dest: 'dist/'
            },
            fonts: {
                expand: true,
                cwd: 'src/',
                src: 'fonts/**',
                dest: 'dist/'
            }
        },
        watch: {
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            },
            bower: {
                files: ['bower_components/**/*'],
                tasks: ['bower_concat']
            },
            scripts: {
                files: ['www/**/*.js', 'external_files/**/*.js'],
                tasks: ['tags']
            },
            copy_statics: {
                files: ['src/fonts/**/*', 'src/images/**/*', 'src/media/**/*'],
                tasks: ['copy']
            },
            templates: {
                files: ['www/**/*.html'],
                tasks: []
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'www/**/*'
                ]
            }
        },
        'serve': {
            options: {
                port: 8080
            }
        },
        'open': {
            'dev': {
                'path': 'http://localhost:8080/www/index.html'
            }
        },
        concurrent: {
            target: {
                tasks: ['serve', 'watch', 'open'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });



    // Task dependencies
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-script-link-tags');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Wrap up all tasks in a single command
    grunt.registerTask('default', ['bower_concat', 'sass', 'tags', 'copy', 'concurrent']);
}
