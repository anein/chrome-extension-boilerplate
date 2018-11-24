const helpers = require("./helpers.methods");
const plugins = require("./helpers.plugins");
const webpackCommonConfig = require("./webpack.common");
//
module.exports = [
  plugins.webpackMerge(webpackCommonConfig, {
    mode   : "development",
    context: helpers.root("src"),

    entry: {
      background: ["./app/background.ts", "./assets/css/background.scss"],
      popup     : ["./app/popup.ts", "./assets/css/popup.scss"],
      options   : ["./app/options.ts", "./assets/css/options.scss"]
    },

    output: {
      path    : helpers.root("build/"),
      filename: "js/[name].js"
    },

    plugins: [
      /**
       * Plugin: CopyWebpackPlugin
       *
       * Description: Copy files and directories in webpack.
       */
      new plugins.CopyWebpackPlugin(
        [
          {
            from: "manifest.json"
          },
          {
            from: "assets/img",
            to  : "assets/img"
          },
          {
            from: "html",
            to  : "html"
          },
          {
            from: "_locales",
            to  : "_locales"
          }
        ],
        {
          // By default, we only copy modified files during
          // a watch or webpack-dev-server build. Setting this
          // to `true` copies all files.
          copyUnmodified: true
        }
      )
    ],
    stats  : {
      modules: false
    }
  })
];
