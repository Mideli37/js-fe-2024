import { EsbuildPlugin } from 'esbuild-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration, WebpackPluginInstance } from 'webpack';
import 'webpack-dev-server';

const PORT = 8080;

const TRANSPILATION_TARGET = 'es2015';

const buildPlugins = (isProd: boolean): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      favicon: path.resolve('public', 'puzzle.png'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve('tsconfig.json'),
      },
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
        chunkFilename: '[name]-[contenthash].css',
      })
    );
  }

  return plugins;
};
export default (env: Record<string, string>): Configuration => {
  const isProduction = env.mode === 'production';
  const config: Configuration = {
    entry: './index.ts',
    mode: isProduction ? 'production' : 'development',
    context: path.join(__dirname, 'src'),
    output: {
      filename: '[name]-[contenthash].js',
      clean: true,
    },
    devServer: {
      port: PORT,
      open: true,
      historyApiFallback: true,
    },
    devtool: !isProduction && 'eval-cheap-module-source-map',
    plugins: buildPlugins(isProduction),
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'esbuild-loader',
          options: {
            target: TRANSPILATION_TARGET,
          },
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: isProduction ? '[hash:base64]' : '[name]-[local]-[hash:base64:8]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '...'],
      plugins: [new TSConfigPathsPlugin()],
    },
    optimization: {
      minimizer: [
        new EsbuildPlugin({
          target: TRANSPILATION_TARGET,
          css: true,
        }),
      ],
    },
  };

  return config;
};
