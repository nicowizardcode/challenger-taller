const path = require('path');

exports.config = {
  runner: 'local',
  specs: [
    '../test/specs/**/*.js'
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel_4_API_30',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'org.wikipedia',
    'appium:appActivity': '.main.MainActivity',
    'appium:noReset': true
  }],
  logLevel: 'info',
  services: [
    ['appium', {
      args: {
        relaxedSecurity: true
      },
      logPath: './logs/'
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotName = `screenshot_${timestamp}.png`;
    await browser.saveScreenshot(`./screenshots/${screenshotName}`);
  }
};