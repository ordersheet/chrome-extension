const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const packageName = "chrome-extension-vue-example"; // 定义项目打包后文件名
// 复制文件夹到指定目录
const copyFiles = [
  {
    from: path.resolve("src/manifest.json"),
    to: `${path.resolve(packageName)}/manifest.json`
  },
  {
    from: path.resolve("public"),
    to: path.resolve(packageName)
  }
];



// 复制插件
const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  })
];

module.exports = {
  pages: {
    popup: {
      entry: `src/popup/popup.js`,
      template: `src/popup/popup.html`,
      filename: `popup.html`
    }
  },
  productionSourceMap: false,
  outputDir: __dirname + '/' + packageName,
  configureWebpack: {
    watch: true,
    entry: {
      content: "./src/content-scripts/content-script.js",
      background: "./src/background/background.js",
      popup: "./src/popup/popup.js",
    },
    output: {
      filename: "js/[name].js"
    },
    plugins,
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: {
      filename: "css/[name].css"
    }
  }
}