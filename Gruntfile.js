module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        'http-server': {
            dev: {
                root: './demo',
                port: 8282
            }
        },
        less: {
            development: {
                options: {
                    paths: ['src'],
                    sourceMap: true
                },
                files: {
                    'src/bootstrap-tree.css': 'src/bootstrap-tree.less'
                }
            }
        },
        watch: {
            files: ['tests/*.js', 'src/**'],
            tasks: ['default']
        },
        uglify: {
            files: {
                expand: true,
                flatten: true,
                src: 'src/*.js',
                dest: 'dist',
                ext: '.min.js'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'src',
                src: '*.css',
                dest: 'dist',
                ext: '.min.css'
            }
        },
        clean: ['demo/lib', 'tests/lib', 'demo/res', 'tests/res', 'dist/'],
        copy: {
            main: {
                files: [
                    // copy dist to tests
                    // { expand: true, cwd: 'dist', src: '*', dest: 'tests/lib/' },
                    {
                        expand: true,
                        cwd: 'src',
                        src: '*.js',
                        dest: 'tests/res'
                    }, {
                        expand: true,
                        cwd: 'src',
                        src: '*.css',
                        dest: 'tests/res'
                    },
                    // copy latest libs to tests
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist',
                        src: 'jquery.js',
                        dest: 'tests/lib/jquery/'
                    }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap',
                        src: 'dist/**',
                        dest: 'tests/lib/bootstrap/'
                    },
                    // copy src to example,
                    {
                        expand: true,
                        cwd: 'src',
                        src: '*.js',
                        dest: 'demo/res'
                    }, {
                        expand: true,
                        cwd: 'src',
                        src: '*.css',
                        dest: 'demo/res'
                    },

                    // copy latest libs to tests
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist',
                        src: 'jquery.js',
                        dest: 'demo/lib/jquery/'
                    }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap',
                        src: 'dist/**',
                        dest: 'demo/lib/bootstrap/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    // load up your plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register one or more task lists (you should ALWAYS have a "default" task list)
    grunt.registerTask('default', ['clean', 'less', 'uglify', 'cssmin', 'copy', 'watch']);
    // grunt.registerTask('test', 'qunit');
};
