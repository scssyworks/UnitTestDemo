const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [
      'ChromeHeadlessCustom'
    ],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--window-size=1920,1080',
          '--remote-debugging-port=9333'
        ]
      }
    },
    browserNoActivityTimeout: 60000,
    singleRun: true, //just run once by default
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    failOnEmptyTestSuite: false,
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'testcases.webpack.js' //just load this file
    ],
    preprocessors: {
      '**/*.js': 'coverage',
      'testcases.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters: [
      'progress',
      'coverage-istanbul',
      'dots',
      'junit',
      'verbose'
    ], //report results in this format
    coverageIstanbulReporter: {
      reports: ['html'],
      dir: 'coverage/',
      fixWebpackSourcePaths: true,
      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 80,
          lines: 80,
          branches: 50,
          functions: 80
        }
      }
    },
    // Webpack configuration
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            enforce: 'post',
            test: /\.js$/,
            exclude: /((test-cases|node_modules)[\\/])|testcases\.webpack|\.spec/, // Ignore test-cases and node_modules folders and testcases.webpack.js all JS files ending with .spec.js
            loader: 'istanbul-instrumenter-loader',
            query: {
              esModules: true
            }
          }
        ]
      },
      node: {
        fs: 'empty'
      },
      resolve: {
        mainFields: ['main', 'module']
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
