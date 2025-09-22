import { defineConfig } from '@rslib/core';
import { cssFileFilter, getPackageInfo, normalizePath, transform } from '@vanilla-extract/integration';

import type { RsbuildPlugin } from '@rsbuild/core';
import type { Format, LibConfig } from '@rslib/core';

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

const createLibrary = (format: Format): LibConfig => ({
  format,
  bundle: false,
  dts: true,
  redirect: {
    dts: {
      extension: true,
    },
  },
  output: {
    distPath: {
      root: `./dist/${format}`,
    },
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
    createLibrary('cjs'),
    createLibrary('esm'),
  ],
});
