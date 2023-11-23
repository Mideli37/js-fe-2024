const blabla = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/main.js',
    menu: './src/menu/menu.js',
  },
  output: {
    clean: true,
  },
  target: 'web',
  devtool: 'inline-cheap-module-source-map',
  mode: 'production',
  performance: { maxEntrypointSize: 512000, maxAssetSize: 512000 },
  plugins: [
    new blabla({ favicon: '', template: './src/index.html', chunks: ['main'] }),
    new blabla({ favicon: '', template: './src/menu/index.html', chunks: ['menu'], filename: './menu/index.html' }),
    new miniCssExtractPlugin()
  ],
  module: {
    rules: [
      {test: /\.css$/i, use: [miniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.(jpg|png|svg)$/i, type: 'asset'}
    ]
  }
};
