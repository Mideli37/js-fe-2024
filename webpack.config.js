const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    new HtmlWebpackPlugin({ favicon: './src/assets/stick-man.jpg', template: './src/index.html', chunks: ['main'] }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(jpg|png|svg)$/i, type: 'asset' },
    ],
  },
};
