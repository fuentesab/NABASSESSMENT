module.exports = function (config) {
    config.set({

        singleRun: true,

        basePath: '../../',

        exclude: [
            'build/test/karma.conf.js'
        ],

        files: [

            'build/lib/bower_components/jquery/dist/jquery.js',
            'build/lib/bower_components/angular/angular.js',
            'build/lib/bower_components/angular-mocks/angular-mocks.js',
            'build/lib/bower_components/lodash/lodash.js',
            'build/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

            {
                pattern: 'build/app/**/*.map',
                included: false
            },

            {
                pattern: 'build/test/**/*.map',
                included: false
            },

            {
                pattern: 'src/app/**/*.ts',
                included: false
            },

            {
                pattern: 'src/test/**/*.ts',
                included: false
            },

            'build/app/**/app.js',
            'build/app/**/*(*.js|*.json|!(component.js)|!(*.map))',
            'build/app/**/component.js',
            'build/test/unit/**/*.js'

        ],

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        preprocessors: {
            'build/app/**/*.js': 'coverage'
        },

        plugins : [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters:[
                {type: 'json', subdir:'../build/test/results/coverage',  file:'coverage-raw.json'}
            ]
        }

    });
};