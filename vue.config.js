"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //对应具体位置
  stylesDir: path.join(__dirname, "./src/styles"), //对应具体位置
  varFile: path.join(__dirname, "./src/styles/variables.less"), //对应具体位置
  mainLessFile: path.join(__dirname, "./src/styles/index.less"), //对应具体位置
  themeVariables: [
    "@primary-color",
    "@secondary-color",
    "@text-color",
    "@text-color-secondary",
    "@heading-color",
    "@layout-body-background",
    "@btn-primary-bg",
    "@layout-header-background"
  ],
  indexFileName: "./public/index.html",
  outputFilePath: path.join(__dirname, "./public/css/color.less"),
  generateOnce: false
};

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javaScriptEnabled: true,
        modifyVars: {
          // "primary-color": "#1DA57A",
          // "link-color": "#1DA57A",
          // "border-radius-base": "2px"
        }
      }
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    plugins: [new AntDesignThemePlugin(options)]
  }
};
