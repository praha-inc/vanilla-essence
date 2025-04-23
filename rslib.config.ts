import { defineConfig } from '@rslib/core';
import { cssFileFilter, getPackageInfo, normalizePath, transform } from '@vanilla-extract/integration';

import type { RsbuildPlugin } from '@rsbuild/core';

const vanillaExtractTransformPlugin = (): RsbuildPlugin => ({
  name: 'praha:vanilla-extract-transform',
  setup: (api) => {
    const packageName = getPackageInfo(api.context.rootPath).name;

    api.transform({ test: cssFileFilter }, ({ code, resourcePath }) => {
      return transform({
        source: code,
        identOption: 'debug',
        filePath: normalizePath(resourcePath),
        rootPath: api.context.rootPath,
        packageName,
      });
    });
  },
});

export default defineConfig({
  source: {
    entry: {
      index: [
        './src/**',
        '!**/*.test.*',
      ],
    },
    tsconfigPath: './tsconfig.build.json',
  },
  plugins: [
    vanillaExtractTransformPlugin(),
  ],
  lib: [
    {
      format: 'cjs',
      bundle: false,
      dts: true,
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
    {
      format: 'esm',
      bundle: false,
      dts: true,
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
    },
  ],
});
