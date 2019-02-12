let webpack = require("webpack");
let path = require("path");

module.exports = {
  // 基本路径
  publicPath: "",
  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /fs/,
        path.resolve(process.cwd(), "src/emptyModule.js")
      ),
      new webpack.NormalModuleReplacementPlugin(
        /vm2/,
        path.resolve(process.cwd(), "src/emptyModule.js")
      )
    ]
  }
};