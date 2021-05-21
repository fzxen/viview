import ts from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import path from "path";
import vue from "rollup-plugin-vue";

export default [
  {
    input: path.resolve(__dirname, "../packages/index.ts"),
    output: [
      {
        format: "esm",
        name: "viview",
        file: path.resolve(__dirname, "../dist/viview.esm.js"),
      },
      {
        format: "iife",
        name: "viview",
        file: path.resolve(__dirname, "../dist/viview.browser.js"),
        globals: {
          vue: "Vue",
        },
      },
    ],
    plugins: [ts(), vue()],
    external: ["vue"],
  },

  {
    input: path.resolve(__dirname, "../packages/index.ts"),
    output: {
      file: path.resolve(__dirname, "../dist/index.d.ts"),
      format: "esm",
    },
    plugins: [dts(), vue()],
  },
];
