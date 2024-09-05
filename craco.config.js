const path = require("path");
const { webpack } = require("webpack");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
