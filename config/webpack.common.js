const webpack = require("webpack");
const helpers = require("./helpers.methods");
const plugins = require("./helpers.plugins");

module.exports = {
  devtool: "none",
  cache  : false,
  target : "web",

  module : {
    rules: [
      {
        test   : /\.ts$/,
        use    : "ts-loader",
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test   : /\.scss$/,
        use    : [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production" ? "style-loader" : plugins.MiniCssExtractPlugin.loader,
          {loader: "css-loader", query: {importLoaders: 1}},
          // { loader: "postcss-loader", query: { path: { config: "config/postcss.config.js" } } },
          {loader: "postcss-loader", options: {config: {path: "./config/"}}},
          "sass-loader"
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"],
    alias     : {
      "@": helpers.root("src/app/")
    }
  },
  plugins: [
    /**
     * Skip the emitting phase
     */
    new webpack.NoEmitOnErrorsPlugin(),

    /**
     * Defines externals.
     */
    new plugins.ExternalsPlugin({
      type   : "commonjs",
      include: __dirname + "/node_modules"
    })
  ],
  stats  : {
    colors     : true,
    entrypoints: true,
    env        : true
  }
};
