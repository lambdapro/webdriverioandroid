exports.config = {
  user:'mudassars',
  key:'bzxOaqKQcMslHb9gCJbNUXm7vDJn6WAbainToGdJlwiaEWKwEy',

  host:"beta-hub.lambdatest.com",
  port:80,
  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Parallel',
    name: 'parallel_test',
    app: "lt://APP10020521645693471010995",
  },

  capabilities: [{
    "platform" : "Android",
		"deviceName" : "Galaxy S21 Ultra 5G",
		"isRealMobile" : true,
		"platformVersion" : "11"
  }, {
		"deviceName" : "Galaxy S10 ",
		"isRealMobile" : true,
		"platformVersion" : "9"
  }],

  logLevel: 'info',
  services: [
          ['lambdatest', {
              tunnel: true
          }]
      ],
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
