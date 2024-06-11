import { Given } from "@wdio/cucumber-framework";

Given(/^I set the app to (.*)$/, async (appName) => {
  if (appName === "gallery") {
    process.env.ANDROID_APP_PACKAGE = "io.flutter.demo.gallery";
    process.env.ANDROID_APP_ACTIVITY = ".MainActivity";
  } else if (appName === "sayakaya") {
    process.env.ANDROID_APP_PACKAGE = "com.sayakaya.android";
    process.env.ANDROID_APP_ACTIVITY =
      "io.flutter.embedding.android.FlutterFragmentActivity";
  }
});
