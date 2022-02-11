import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true,
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
    output: [
      { file: './dist/gather.cjs.js', format: 'cjs', name: 'gather', exports: 'default', },
      { file: './dist/gather.module.js', format: 'es' },
      { file: './dist/gather.js', format: 'iife', name: 'gather' }
    ],
    // external: [/@babel\/runtime-corejs3/],
    plugins,
  },
];
