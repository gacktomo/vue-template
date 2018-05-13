# Vue-template

## Information 
Onsen UI + Vue + Vue Router + Axios + Cordova + PWA Starter Project  
Please read carefully before use this project starter

This project is based on [onsenui-vue-pwa webpack template](https://github.com/OnsenUI/vue-pwa-webpack)

-------------------------------

## Dependencies 
- [onsenui](https://github.com/OnsenUI/OnsenUI)
- [vue](https://github.com/vuejs/vue)
- [vue-onsenui](https://github.com/OnsenUI/OnsenUI/tree/master/bindings/vue)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [axios](https://github.com/mzabriskie/axios)
- [cordova](https://github.com/cordova)

-------------------------------

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Build Setup for Android

### 1. Install cordova.
```
sudo npm install -g cordova
```
### 2. Install JDK leatest version. 
 Uninstall old version JDK if appear errors.  

### 3. Install Android Studio.
Install gradle if appear errors.  
Example for macOS. 
```
brew install gradle
```
### 4. Agree Android SDK license
Example for macOS. 
```
~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

### 5. Run build command
```
# build for Android APK
npm run build:android

# debug for Android APK
npm run debug:android
```

## Build Setup for iOS

### 1. Install cordova.
```
sudo npm install -g cordova
```
### 2. Run build command
```
# build for Android APK
npm run build:ios

# debug for Android APK
npm run debug:ios
```