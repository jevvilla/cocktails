# Carpediem - ReconVelocity Mobile
React Native Solution for the Recon Velocity Mobile Product

## Before we start

Please make sure you have `node`, `npm`, `git`, `nvm` and `cocoapods` installed correctly. In case you don't have any of those installed and setup, please go to [nodejs.org](https://nodejs.org/en/) to download and install the **Recommended For Most Users** version, or go [here](https://git-scm.com/downloads) to download `git`. `nvm` can be installed by following [these instructions](https://github.com/nvm-sh/nvm#installation-and-update) and `cocoapods` can be set up following this [link](https://facebook.github.io/react-native/docs/integration-with-existing-apps).


## Setup

### React Native

Please refer the [React Native docs Getting Started guide](https://facebook.github.io/react-native/docs/getting-started) over the **React Native CLI Quickstart** tab. There, you can see all the detailed setup processs for `Android` and `iOS` platforms.

### rbenv

This project uses CocoaPods to install iOS dependencies. CocoaPods is written in Ruby, and so we use `rbenv` to specify (and install, if necessary) the Ruby version to use.  Please refer to these [instructions to install rbenv](https://github.com/rbenv/rbenv#installation).

### .env

This projects uses `react-native-config` to keep keys isolated from project code. Before start building the app make sure you have a `.env` file created in the root of the project, make sure you add all needed variables, up until now the variables you have to add are:

```
GOOGLE_MAPS_API_KEY_IOS=my_key_for_ios
GOOGLE_MAPS_API_KEY_ANDROID=my_key_for_android
```

### This Project

Once the above parts are setup, you can go ahead and clone the repo using the following command in your terminal: 
```
git clone https://github.com/carpediemsolutionsllc/car-mobile-reconvelocity-react_native.git
```
Then go to the project root (project folder), and run the following commands to get the app running:

- `nvm use` - Set nvm to use the specified node version
- `rbenv install` - Install the expected version of Ruby (one-time setup)
- `make pod-repo` - Install the CocoaPods repository (one-time setup)
- `make install` - Install project dependencies
- `make run-ios/android` - Run the app locally.  By default this will run an iPhone X simulator / install to the single Android device connected (if more than one are connected, you must specify the device with `—deviceId` which can be gotten from `add devices`).

## Update reconvelocity-data

This project uses our `reconvelocity-data` module of MobX data classes, objects, and services. During our initial development, we install this module directly from its car-library-reconvelocity-mobx repo on GitHub, by specifying a `git+https` URL as the dependency in this project's [package.json] file.

To update this dependency to a newer version, or some specific branch, tag, or commit hash from the car-library-reconvelocity-mobx repo, run **one** of these commands:

```
bin/update-data                     # Install latest commit of from dev branch
bin/update-data feature/something   # Install latest commit from feature/something branch
bin/update-data some-tag-name       # Install latest commit with some-tag-name tag
bin/update-data c8a528f             # Install commit with hash c8a528f
```

## Debug

App has [Reactotron](https://infinite.red/reactotron) as debug module.
To use it, just need to download the [desktop app](https://github.com/infinitered/reactotron/blob/master/docs/installing.md) and run.


Some Android devices have problem to connect. So you need to run `adb reverse tcp:9090 tcp:9090` in a console and reload android react native app.


## Generate Android build

Firstime you want to generate a build you need to:

- add carpediem-android-key.keystore file inside `android/app` folder.

    Only at OSX devices:
    -
    - To open Keychain Access just press space+cmd and type keychain access.
    - Add a new password by pressing the plus sign
    -As name put `recon_velocity_android_keystore`. Fill in `recon_velocity_user` in account. Ultimately you fill in the password `*********` the build password
    
    Other systems
    -
    - Go to `build.gradle` and set as default 
    ```
    signingConfigs {
               release {
                   storeFile file(MYAPP_RELEASE_STORE_FILE)
                   storePassword pass // Change this
                   keyAlias *******
                   keyPassword *******
               }
              
     ```
     Remember avoid to commit this change to git repo.
     
Any time you want to build repo:

- run `$ make build-android-release`
