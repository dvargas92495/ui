import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from "./package.json";

export default {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      typescript(),
      nodeResolve(),
      commonjs()
    ],
    external: ['react', 'react-dom']
  }