module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'spec/**/*.spec.coffee'
    ],

    exclude: [],

    preprocessors: {
      'spec/**/*.spec.coffee': ['browserify']
    },

    browserify: {
      watch: true,
      debug: true
    },

    reporters: ['dots'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_WARN,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
