# えはまデート(EhamaDate)

## Information 
Onsen UI + Vue + Vue Router + Axios + Cordova PWA Starter Project  
Please read carefully before use this project starter

1. This project is based on [onsenui-vue-pwa webpack template](https://github.com/OnsenUI/vue-pwa-webpack)
2. Since I dont need PWA at the moment, so I remove all the script related to PWA in `index.html`. If you want to use PWA, just rename `index-serviceworker.html` to `index.html`
3. Since I need to access the page via URL in the browser, so instead of using Onsen ui `<v-ons-navigator>` system, I use [vue-router](https://router.vuejs.org/en/) to meet my requirement.

-------------------------------

## List of features implemented in this project
1. Side menu navigation 
2. Application state management using `Vuex`
3. Page and component creation 
4. RESTAPI consumption using `axios`
5. Custom routing on onsenui-vue using vue-router

-------------------------------

## Dependencies 
- [onsenui](https://github.com/OnsenUI/OnsenUI)
- [vue](https://github.com/vuejs/vue)
- [vue-onsenui](https://github.com/OnsenUI/OnsenUI/tree/master/bindings/vue)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [axios](https://github.com/mzabriskie/axios)

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
-------------------------------

## Reference : 
- Separate HTML and SCSS file. [link](https://github.com/vuejs/vueify/issues/35)
- Enable scss working in vue [link](https://github.com/vuejs/vue-loader/issues/363)
- Vue routing using hash setup. [link](http://router.vuejs.org/en/essentials/getting-started.html)
- Getting started with vuex. [link](http://vuex.vuejs.org/en/getting-started.html)
- Delete service worker. [link](https://stackoverflow.com/a/34791693/1843755)
