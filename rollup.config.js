// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: [{
    file: 'dist/utils.js',
    format: 'cjs'
  }, {
    file: 'dist/utils.min.js',
    format: 'cjs',
    plugins: [terser()]
  }],
  plugins: [
    resolve(),
    vue({
      css: true
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}
