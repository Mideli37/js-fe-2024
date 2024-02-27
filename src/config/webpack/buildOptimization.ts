import type { Configuration } from 'webpack';
import { EsbuildPlugin } from 'esbuild-loader';
import type { WebpackConfig } from './types';

type Optimization = Configuration['optimization'];

export const buildOptimization = (config: WebpackConfig): Optimization => ({
  minimizer: [
    new EsbuildPlugin({
      target: config.transpilationTarget,
      css: true,
    }),
  ],
});
