var glob = require("glob");

module.exports = {
  entry: {
    app: glob.sync('./src/**/*'),
  },

  output: {
    path: '../../app/assets/javascripts/webpack',
    filename: '[name].js',
  },

  module: {
    // preLoaders: [
    //   {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    // ],
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
