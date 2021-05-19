const ts = require("@rollup/plugin-typescript");
// const { getPackagesSync } = require("@lerna/project");
const { readdirSync } = require("fs");
const { rollup } = require("rollup");
const path = require("path");
const vue = require("rollup-plugin-vue");

const input = readdirSync(path.resolve(__dirname, "../packages")).filter(
  (name) => !name.startsWith("_")
);

async function build(inputOptions, outOptions) {
  const bundle = await rollup(inputOptions);

  for (const output of outOptions) {
    await bundle.write(output);
  }
}

input.forEach((pkg) =>
  build(
    {
      input: path.resolve(__dirname, `../packages/${pkg}/src/index.ts`),
      plugins: [ts(), vue()],
    },
    [
      {
        format: "esm",
        name: pkg,
        file: path.resolve(__dirname, `../packages/${pkg}/output/index.js`),
      },
    ]
  )
);
