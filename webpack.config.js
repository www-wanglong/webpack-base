const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入 在内存中自动生成index页面的插件
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname,'./src/index.html'), //源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象 因为webpack是基于node构建的 支持所有的node api和语法
// webpack只能默认打包处理.js后缀名类型的文件。所有需要配置第三方loader
module.exports = {
  mode: 'production',
  plugins: [htmlPlugin],
  module: { //所有第三方 模块的配置规则
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
      // 打包处理css样式表的第三方loader
      // modules表示为普通的css样式表 启用模块化
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'},
      // 打包处理scss
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示 这几个文件的后缀名 可以省略不写
    alias: {
      '@': path.join(__dirname, './src') // @表示
    }
  },
}

// es6中向外导出的api  import ** from
//export default {}