import ts from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { readdirSync } from "fs";
import path from "path";
import vue from "rollup-plugin-vue";

const packages = readdirSync(path.resolve(__dirname, "../packages")).filter(
  (name) => !name.startsWith("_")
);

export default packages
  .map((pkg) => [
    // esm bundle
    {
      input: path.resolve(__dirname, `../packages/${pkg}/src/index.ts`),
      plugins: [ts(), vue()],
      external: ["vue"],
      output: {
        format: "esm",
        name: pkg,
        file: path.resolve(__dirname, `../packages/${pkg}/output/index.js`),
      },
    },

    // .d.ts
    {
      input: path.resolve(__dirname, `../packages/${pkg}/src/index.ts`),
      plugins: [dts(), vue()],
      output: {
        file: path.resolve(__dirname, `../packages/${pkg}/output/index.d.ts`),
        format: "esm",
      },
    },
  ])
  .flat();
