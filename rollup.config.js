import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

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
                include: ["node_modules/**"],
                skip: ["react", "react-dom"],
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                extract: false, // Inline styles into the JS bundle
                modules: true,  // Enable CSS Modules if needed
                inject: true,   // Inject CSS into the <style> tag
                minimize: true, // Minify CSS
                plugins: [
                    tailwindcss("./tailwind.config.js"),
                    autoprefixer(),
                ],
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
];
