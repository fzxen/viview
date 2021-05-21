const server = require("live-server");
const path = require("path");
const static = require("serve-static");

server.start({
  port: 3123,
  root: path.resolve(__dirname, "../examples"),
  open: true,
  wait: 1000,
  middleware: [static(path.resolve(__dirname, "../dist"))],
});
