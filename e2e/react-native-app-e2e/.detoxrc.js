const path = require("node:path");
const dotenv = require("dotenv");
const { readFileSync } = require("node:fs");

const fastlaneEnvPath = path.join(
  __dirname,
  "../../packages/react-native-app/fastlane/Fastlane.env",
);

fastlaneEnv = dotenv.parse(readFileSync(fastlaneEnvPath));

module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "./jest.config.json",
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      build:
        "cd ../.. && yarn nx build:ios react-native-app --configuration=debug-simulator",
      binaryPath:
        "../../packages/react-native-app/ios/build/Build/Products/Debug-iphonesimulator/ReactNativeApp.app",
    },
    "ios.release": {
      type: "ios.app",
      build:
        "cd ../.. && yarn nx build:ios react-native-app --configuration=release-simulator",
      binaryPath:
        "../../packages/react-native-app/ios/build/Build/Products/Release-iphonesimulator/ReactNativeApp.app",
    },
    "android.debug": {
      type: "android.apk",
      build:
        "cd ../.. && yarn nx build:android react-native-app --configuration=test-debug",
      binaryPath:
        "../../packages/react-native-app/android/app/build/outputs/apk/debug/app-debug.apk",
    },
    "android.release": {
      type: "android.apk",
      build:
        "cd ../.. && yarn nx build:android react-native-app --configuration=test-release",
      binaryPath:
        "../../packages/react-native-app/android/app/build/outputs/apk/release/app-release.apk",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: fastlaneEnv.IOS_SIMULATOR_DEFAULT_DEVICE,
        os: `iOS ${fastlaneEnv.IOS_SIMULATOR_DEFAULT_VERSION}`,
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Detox",
      },
    },
  },
  configurations: {
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
    },
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
    },
  },
};
