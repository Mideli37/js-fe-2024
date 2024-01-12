const blabla = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    clean: true,
  },
  optimization: {
    minimize: false,
  },
  target: 'web',
  devtool: 'inline-cheap-module-source-map',
  mode: 'production',
  performance: { maxEntrypointSize: 151200000, maxAssetSize: 151200000 },
  plugins: [
    new blabla({ favicon: '', template: './src/index.html', chunks: ['main'] }),
    new miniCssExtractPlugin()
  ],
  module: {
    rules: [
      {test: /\.css$/i, use: [miniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.(jpg|png|svg)$/i, type: 'asset'}
    ]
  }
};
