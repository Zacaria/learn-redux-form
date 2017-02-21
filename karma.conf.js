const path = require('path');

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      // 'node_modules/babel-polyfill/dist/polyfill.js',
      // 'client/**/*.jsx',   //could be /src/**/*.js
      {
        pattern: './client/**/*.spec.js',
        watched: false
      },
      {
        pattern: './client/**/*.spec.jsx',
        watched: false
      }
      // 'client/**/*.js',   //could be /src/**/*.js
      // 'client/**/*.spec.js',
      // 'client/**/*.spec.jsx'
    ],
    // exclude: [
    //   '**/node_modules/**'
    // ],
    preprocessors: {
      // add webpack as preprocessor
      './client/**/*.js': ['webpack', 'sourcemap'],
      './client/**/*.jsx': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig(),
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },
    plugins: [
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-webpack'
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react']
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
  });
};
