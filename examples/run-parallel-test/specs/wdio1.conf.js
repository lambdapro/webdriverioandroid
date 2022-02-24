exports.config = {
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',

    updateJob: false,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'WIN10'
      },{
        deviceName: 'Galaxy Note 10',
        platformVersion: '10',
        platformName: 'Android',
      },{
        deviceName: 'iPhone 13 Pro',
        platformVersion: '15.0',
        platformName: 'iOS',
      },{
        browser: 'safari',
        version: 'latest',
        platform: 'MacOS Monterey',


    }],
    services: [
            ['lambdatest', {
                tunnel: false
            }]
        ],

    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'hub.lambdatest.com',
    port:80,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }



  }
