fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios clean

```sh
[bundle exec] fastlane ios clean
```

Clean the iOS project of intermediate build artifacts

### ios update_version_and_build_number

```sh
[bundle exec] fastlane ios update_version_and_build_number
```

Update the iOS version and build number metadata based on the project

### ios authenticate_with_app_store_connect

```sh
[bundle exec] fastlane ios authenticate_with_app_store_connect
```

Authenticate with App Store Connect

### ios build

```sh
[bundle exec] fastlane ios build
```

Build the iOS project

### ios test

```sh
[bundle exec] fastlane ios test
```

Run native iOS tests

### ios beta

```sh
[bundle exec] fastlane ios beta
```

Push a new beta build to TestFlight

### ios deploy

```sh
[bundle exec] fastlane ios deploy
```

Push a new build to the AppStore

----


## Android

### android clean

```sh
[bundle exec] fastlane android clean
```

Clean the Android project of intermediate build artifacts

### android update_version_and_build_number

```sh
[bundle exec] fastlane android update_version_and_build_number
```

Update the Android version and build number metadata based on the project

### android build

```sh
[bundle exec] fastlane android build
```

Build the Android project

### android test

```sh
[bundle exec] fastlane android test
```

Run native Android tests

### android beta

```sh
[bundle exec] fastlane android beta
```

Submit a new internal build to Google Play

### android deploy

```sh
[bundle exec] fastlane android deploy
```

Deploy a new production version to Google Play

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
