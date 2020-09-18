const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    publicPath: "public",
    path: path.resolve(__dirname, "public"),
  },
  mode: "none",
  resolve: {
    extensions: [".ts", ".js"],
  },
};
