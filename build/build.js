const ts = require("@rollup/plugin-typescript");
const { default: dts } = require("rollup-plugin-dts");
const { readdirSync } = require("fs");
const path = require("path");
const vue = require("rollup-plugin-vue");
const { rollup } = require("rollup");
const logger = require("./log");

/**
 * yarn build shared layout
 * or yarn build for all packages
 */
function genPackages() {
  let packages = process.argv.slice(2);
  if (packages.length <= 0) {
    packages = readdirSync(path.resolve(__dirname, "../packages")).filter(
      (name) => !name.startsWith("_")
    );
  }

  return packages;
}

async function build(input, output) {
  const bundle = await rollup(input);

  let outputs = Array.isArray(output) ? output : [output];
  for (const output of outputs) {
    await bundle.write(output);
    logger.success(`${input.input} -> ${output.file}`);
  }
}

genPackages().forEach((pkg) => {
  // build bundle
  build(
    {
      input: path.resolve(__dirname, `../packages/${pkg}/src/index.ts`),
      plugins: [ts(), vue()],
      external: ["vue", "@viview/shared"],
    },
    {
      format: "esm",
      name: pkg,
      file: path.resolve(__dirname, `../packages/${pkg}/output/index.js`),
    }
  );

  // build .d.ts
  build(
    {
      input: path.resolve(__dirname, `../packages/${pkg}/src/index.ts`),
      plugins: [dts(), vue()],
      external: ["vue", "@viview/shared"],
    },
    {
      file: path.resolve(__dirname, `../packages/${pkg}/output/index.d.ts`),
      format: "esm",
    }
  );
});
