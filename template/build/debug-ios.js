require('./check-versions')()

process.env.NODE_ENV = 'production'

var fs = require("fs")
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  webpack Build complete.\n'))

    var apk_spinner = ora('Building for iOS....')
    apk_spinner.start()
    const execSync = require('child_process').execSync
    fs.access("cordova/platforms/ios", fs.constants.R_OK | fs.constants.W_OK, (error) => {
      if (error) {
        if (error.code === "ENOENT") {
          execSync('pwd; cd cordova; cordova platform add ios;').toString()
        } else {
          return;
        }
      }
    });
    const result =  execSync('pwd; cd cordova; cordova run ios;').toString()
    apk_spinner.stop()
    console.log(result)
    console.log(chalk.cyan('  iOS Build complete.\n'))
  })
})
