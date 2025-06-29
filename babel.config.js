module.exports = function (api) {
  api.cache(true)

  return {
    // presets: ['module:@react-native/babel-preset'],

    presets: ['babel-preset-expo'],

    // other config
    plugins: [
      // other plugins
      ['react-native-unistyles/plugin', {
        // pass root folder of your application
        // all files under this folder will be processed by the Babel plugin.
        root: 'src'
      }]
    ]
  }
}
