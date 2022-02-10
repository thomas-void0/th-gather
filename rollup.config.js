import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    declaration: false,
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: /node_modules/,
    extensions: ['.js', '.ts', '.mjs', '.es'],
  }),
  terser({
    format: {
      comments: false,
    },
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: `dist/gather-${pkg.version}.js`,
      format: 'iife',
      name: 'gather',
      exports: 'default',
    },
    // external: [/@babel\/runtime-corejs3/],
    plugins,
  },
];
