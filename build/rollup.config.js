const ts = require("@rollup/plugin-typescript");
const { default: dts } = require("rollup-plugin-dts");
const { readdirSync } = require("fs");
const path = require("path");
const vue = require("rollup-plugin-vue");

export default [
  {
    input: path.resolve(__dirname, `../packages/index.ts`),
    output: {
      format: "esm",
      name: "viview",
      file: path.resolve(__dirname, `../dist/index.js`),
    },
    plugins: [ts(), vue()],
    external: ["vue"],
  },

  {
    input: path.resolve(__dirname, `../packages/index.ts`),
    output: {
      file: path.resolve(__dirname, `../dist/index.d.ts`),
      format: "esm",
    },
    plugins: [dts(), vue()],
  },
];
