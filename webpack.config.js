const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./assets/js/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },

  devServer: {
    contentBase: "./dist",
  },

  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      proxy: "http://portfoliotheme.local/",
      host: "portfoliotheme.local/",
      files: ["./*.php", "./assets/js/*.js"],
      port: 3000,
    }),
  ],
  watch: true,

  module: {
    rules: [
      {
        test: /\.scss$/, // all files that end with .css
        use: [
          "style-loader", //3. Dom inject
          "css-loader", //2. CSS in commonJs
          "sass-loader",
        ], //1. SCSS wird zu CSS
      },
      {
        test: /\.css$/, // all files that end with .css
        use: [
          "style-loader", //3. Dom inject
          "css-loader", //2. CSS in commonJs
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
  },
};
