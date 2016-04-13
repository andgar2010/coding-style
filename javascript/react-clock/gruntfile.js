module.exports = function (grunt) {
    var tasks,
        production = true,
        jsonPackage = grunt.file.readJSON('package.json');

    grunt.initConfig({
        clean: ['build'],

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/closure-compiler/lib/vendor',
                        src: ['compiler.jar'],
                        dest: 'build'
                    }
                ]
            }
        },

        writefile: {
            options: {
                data: {
                    app: production ? 'app.min.js' : 'app.js',
                    version: jsonPackage.version
                }
            },
            main: {
                src: 'src/index.html.hbs',
                dest: ['build', production ? 'production' : 'master', 'index.html'].join('/')
            }
        },

        typescript: {
            base: {
                src: ['src/**/**.ts', 'src/*.ts'],
                dest: 'build',
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },

        browserify: {
            client: {
                src: ['build/src/**'],
                dest: 'build/master/app.js'
            }
        },

        'closure-compiler': {
            frontend: {
                js: [
                    'build/master/app.js'
                ],
                jsOutputFile: 'build/production/app.min.js',
                closurePath: '.',
                options: {
                    compilation_level: 'SIMPLE_OPTIMIZATIONS',
                    warning_level: 'DEFAULT'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-writefile');

    tasks = ['clean', 'writefile', 'typescript', 'browserify'];

    if (production) {
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-closure-compiler');

        tasks = tasks.concat(['copy', 'closure-compiler']);
    }

    grunt.registerTask('default', tasks);
};