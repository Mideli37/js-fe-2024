const blabla = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/pages/main.js',
    menu: './src/pages/menu/menu.js',
  },
  output: {
    clean: true,
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false,
  },
  target: 'web',
  devtool: 'inline-cheap-module-source-map',
  mode: 'production',
  performance: { maxEntrypointSize: 1512000, maxAssetSize: 1512000 },
  plugins: [
    new blabla({ favicon: './src/widgets/header/assets/coffee-cup.svg', template: './src/pages/index.html', chunks: ['main'] }),
    new blabla({ favicon: './src/widgets/header/assets/coffee-cup.svg', template: './src/pages/menu/index.html', chunks: ['menu'], filename: './menu/index.html' }),
    new miniCssExtractPlugin()
  ],
  module: {
    rules: [
      {test: /\.css$/i, use: [miniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.(jpg|png|svg)$/i, type: 'asset'}
    ]
  }
};
