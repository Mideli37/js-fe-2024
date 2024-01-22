import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';

const DEFAULT_DEV_SERVER_PORT = 8080;

export default (env, argv) => {
  const isDev = argv.mode === 'development';
  const isProd = !isDev;

  /** @type {import('webpack').Configuration} */
  const config = {
    context: path.resolve('src'),
    mode: argv.mode,
    entry: './index.js',
    output: {
      filename: '[name]-[contenthash].js',
      clean: true,
      assetModuleFilename: '[name]-[contenthash][ext]',
    },
    devtool: isDev && 'eval-cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: path.join('assets', 'favicon.avif'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(jpg|png|svg|avif)$/i,
          type: 'asset',
        },
      ],
    },
    devServer: {
      port: env.PORT ?? DEFAULT_DEV_SERVER_PORT,
      historyApiFallback: true,
    },
  };

  if (isProd) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
        chunkFilename: '[name]-[contenthash].css',
      })
    );
  }

  return config;
};
