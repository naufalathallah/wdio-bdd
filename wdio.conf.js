export const config = {
  runner: "local",
  port: 4723,
  specs: ["./features/*.feature"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": process.env.ANDROID_PLATFORM_VERSION,
      "appium:deviceName": process.env.ANDROID_DEVICE_NAME,
      "appium:automationName": process.env.ANDROID_AUTOMATION_NAME,
      "appium:appPackage": process.env.ANDROID_APP_PACKAGE,
      "appium:appActivity": process.env.ANDROID_APP_ACTIVITY,
      "appium:autoGrantPermissions": true,
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  framework: "cucumber",
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./features/step-definitions/*.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
