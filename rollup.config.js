import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import serve from "rollup-plugin-serve"
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true,
    exclude: ["/src/index.ts"]
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
  serve({
    open: true, // 自动打开页面
    port: 8000,
    openPage: '/public/index.html', // 打开的页面
    contentBase: ''
  })
];

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: './dist/gather.cjs.js', format: 'cjs', name: 'gather', exports: 'default', },
      { file: './dist/gather.module.js', format: 'es' },
      { file: './dist/gather.js', format: 'iife', name: 'gather' }
    ],
    plugins,
  },
];
