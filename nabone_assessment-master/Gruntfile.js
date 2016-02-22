module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('remap-istanbul');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        karma : {
            unit: {
                configFile: 'build/test/karma.conf.js',
                singleRun: true
            }
        },

        ts: {
            app: {
                src: ['src/app/**/*.ts', "lib/typings/tsd.d.ts", '!src/**/_reference.ts'],
                outDir: 'build/app',
                reference: false,
                options: {
                    noEmitOnError: true,
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true
                }
            },
            test: {
                src: ['src/**/*.ts', "lib/typings/tsd.d.ts", "lib/customTypings/tsd.d.ts", '!src/**/_reference.ts'],
                outDir: 'build',
                reference: false,
                options: {
                    noEmitOnError: true,
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true
                }
            }
        },

        clean: {
            build: ['build'],
            buildApp: ['build/app'],
            tscache: ['.tscache']
        },

        copy: {
            src: {
                expand: true,
                cwd: 'src',
                src: ['**/*.html', '**/*.js', '**/*.js.map', '**/*.json', '**/*.css'],
                dest: 'build'
            },
            lib: {
                expand: true,
                cwd: 'lib',
                src: ['**/*.js', '**/*.js.map', '**/*.json', '**/*.css'],
                dest: 'build/lib'
            }
        },

        connect: {
            test: {
                options: {
                    port: 8082,
                    base: './'
                }
            },
            start: {
                options: {
                    port: 8082,
                    base: './',
                    keepalive: true
                }
            }
        },

        ngtemplates: {
            src: {
                cwd: 'src/app',
                src: '**/*.html',
                dest: 'build/app/templates.js',
                options: {
                    module: "nabone.burger",
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js",
                noColor: false,
                args: {}
            },
            all: {
                options: {
                    configFile: "build/test/protractor-conf.js",
                    args: {}
                }
            }
        },

        remapIstanbul: {
            default: {
                src: 'build/test/results/coverage/coverage-raw.json',
                options: {
                    reports: {
                        'html': 'build/test/results/coverage/html',
                        'cobertura': 'build/test/results/coverage/typescript-cobertura-coverage.xml',
                        'json': 'build/test/results/coverage/coverage-mapped.json'
                    }
                }
            }
        },

        coverage: {
            default: {
                options: {
                    thresholds: {
                        'lines': 80
                    },
                    dir: 'coverage',
                    subdir: '.',
                    root: 'build/test/results'
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    //unit test with karma
    grunt.registerTask('unit-test',
        [
            'build',
            'karma:unit',
            'remapIstanbul',
            'coverage'
        ]
    );

    //e2e test with protractor
    grunt.registerTask('e2e-test',
        [
            'build',
            'connect:test',
            'protractor:all'
        ]
    );

    //copy resources
    grunt.registerTask('copy-build',
        [
            'copy:src',
            'copy:lib'
        ]
    );

    //Build the app & tests
    grunt.registerTask('build',
        [
            'clean:build',
            'ts:test',
            'clean:buildApp',
            'ts:app',
            'copy-build',
            'ngtemplates:src',
            'clean:tscache'
        ]
    );

    grunt.registerTask('default', ['build']);

};
