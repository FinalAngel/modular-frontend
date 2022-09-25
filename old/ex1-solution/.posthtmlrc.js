const path = require("path");

module.exports = {
  plugins: [
    require("posthtml-include")({
      root: path.resolve(__dirname, "src"),
    }),
  ],
};
