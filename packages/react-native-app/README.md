# react-native-app

[//]: # "Begin: Shields"
[![npm](https://img.shields.io/npm/v/@genesis/react-native-app)](https://www.npmjs.com/package/@genesis/react-native-app)
[//]: # "End: Shields"

This project was generated by the `@chiubaka/nx-plugin:app.react-native` generator.

## Manual Setup
To finish setting up this repository, please complete the following:
- [] Configure the Codecov shield for this project
  - If no Codecov shield appeared in this README file, grab the Codecov shield Markdown snippet from Codecov
  - Append a `&flag=react-native-app` URL param to the URL
  - Paste this markdown into this README below the title
- [] Install additional development dependencies for React Native
  - [] Ensure that you have the Android SDK installed
  - [] Ensure that you have Xcode, Xcode Command Line Tools, and the iOS SDKs installed
  - [] Ensure that you have `ruby` (required) and `rbenv` (optional but recommended)
- [] Finish setting up E2E testing with Detox
  - [] Update `.detoxrc.js` file in the generated E2E project
    - Ensure that a valid `avdName` is filled in under the `devices` section OR create an Android
      Virtual Device in Android Studio using the default name &#34;Detox&#34;- [] Finish setting up iOS code signing and deployment via TestFlight
  - [] If you didn&#39;t supply a `codeSigningGitRepositoryUrl`, you&#39;ll need
       to manually fill in the `git_url` value in `fastlane/Matchfile`.
         - If you don&#39;t already have a repository, you may need to create new one
           for use with Fastlane match. You can read more about this process
           [here](https://docs.fastlane.tools/actions/match/).
  - [] Finish setting up iOS code signing and automated deployment with CircleCI
    - [] Add the `MATCH_PASSWORD` environment variable to CircleCI--this is your Fastlane match encryption password
    - [] Under the CircleCI project&#39;s SSH Keys, set the project up with a user key. It is recommended that
         you create a GitHub machine user account and invite it to access your code signing repository and
         your monorepo. Authorize CircleCI to connect to GitHub using this machine user account.
    - [] Create and download an App Store Connect API key.
      - [] Place your downloaded `.p8` key in the `ios/secrets` directory.
        - This file **SHOULD NOT** be checked into source control. However, you should back this file
          up somewhere safe so you don&#39;t list it. The `ios/secrets` directory is automatically
          ignored by `git`.
      - [] Add a `APP_STORE_CONNECT_APP_KEY_ISSUER_ID` variable to `fastlane/Fastlane.env`
        - You can find this value on the screen where you generated and downloaded your key
      - [] Add a `APP_STORE_CONNECT_KEY_ID` variable to `fastlane/Fastlane.env`
        - You can find this value on the screen where you generated and downloaded your key
      - Refer to [Fastlane&#39;s documentation](https://docs.fastlane.tools/getting-started/ios/authentication/#method-1-app-store-connect-api-key-recommended) on this for more info.
    - [] Add an `APP_STORE_CONNECT_KEY` environment variable to the CircleCI project with the base64 encoded contents of your `p8` key
      - `base64 -i app-store-connect-key.p8`
    - Consider creating a [context](https://circleci.com/docs/contexts/) for CircleCI environment variables.
      - This will allow you to share account-level environment variables with other projects in your org.
      - By default, the generated CI configs reference an `ios-deployment` context.
- [] Finish setting up Android code signing and deployment via Google Play Store
  - [] Create a Google service account with permissions to the Google Play Android Developer API
       and download a `.json` private key for the account into this repository.
       repo to automate access to Google Play Store publishing
       - Refer to [Fastlane&#39;s documentation](https://docs.fastlane.tools/actions/supply/#setup) and to [Google&#39;s](https://developers.google.com/android-publisher/getting_started)
       - Place your generated `.json` service account private key file in this project as `android/secrets/google-play-key.json`
         - This file **SHOULD NOT** be checked into source control. However, you should back
           this file up somewhere safe so you don&#39;t lose it. The `android/secrets` directory
           is automatically ignored by `git`.
         - If you choose to place this file elsewhere, you must update the `json_key_file` value
           in `fastlane/Appfile`
       - Make sure you&#39;ve granted your Service Account permissions in Google Play [here](https://play.google.com/console/users-and-permissions)!! It is not sufficient to just create the service account in the Google Cloud Console.
  - [] Create a new app in the [Google Play Console](https://play.google.com/console/u/0/developers/?pli=1)
    - You must set up an Internal Test Track and manually upload at least one build before
      deployment automation with `fastlane` can do its magic
    - You can generate a `.aab` bundle to manually upload using the command `yarn nx build:android react-native-app --configuration=bundle-release`
      - The bundle will be output to `android/app/build/outputs/bundle/release/app-release.aab`
      - The bundle will be signed using the generated `android/secrets/upload-keystore.jks`
  - [] Finish setting up Android code signing and automated deployment with CircleCI
    - [] Add the `BASE64_KEYSTORE`, `GOOGLE_PLAY_KEY`, `RELEASE_KEY_ALIAS`,
         `RELEASE_KEY_PASSWORD`, and `RELEASE_STORE_PASSWORD` to the CircleCI
         project&#39;s environment variables.
      - Refer to [CircleCI&#39;s documentation](https://circleci.com/docs/deploy-android-applications/)
      - The keystore details can be found in the generated `android/secrets/upload-keystore.properties` file

