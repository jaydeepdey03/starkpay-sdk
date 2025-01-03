import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import tailwindcss from 'tailwindcss';
import autoprefixer from "autoprefixer";

const tailwindConfig = require('./tailwind.config.js');
const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve({
                ignoreGlobal: false,
                include: ['node_modules/**'],
                skip: ['react', 'react-dom'],
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json", }),
            postcss({
                extract: true,
                minimize: true,
                extract: "main.css",
                minimize: true,
                config: {
                    path: './postcss.config.mjs',
                },
                extensions: ['.css'],
                minimize: true,
                inject: {
                    insertAt: 'top',
                },
                plugins: [tailwindcss("./tailwind.config.js"), autoprefixer()],
            }),
            terser(),

        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },

    {
        input: "src/main.css",
        output: [{ file: "dist/main.css", format: "es" }],
        plugins: [
            postcss({
                extract: "main.css",
                minimize: true,
                config: {
                    path: './postcss.config.mjs',
                },
                extensions: ['.css'],
                minimize: true,
                inject: {
                    insertAt: 'top',
                },
                plugins: [tailwindcss("./tailwind.config.js"), autoprefixer()],
            }),
        ],
    },

];
