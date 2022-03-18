const path = require('path');
const WebpackMerge= require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.config");

module.exports=WebpackMerge.merge(baseWebpackConfig,{
 mode: "production",
  entry:path.join(__dirname,'../src/main.tsx'),
  output:{
   filename:'[name].build.js',
   path:path.join(__dirname,'./../dist')
  },
  plugins:[
   new HtmlWebpackPlugin({
    filename: "index.html",
    template: "public/index.html",
    inject: true, // true：默认值，script标签位于html文件的 body 底部
    minify: {
      removeComments: true,            
      collapseWhitespace: true,           
      removeAttributeQuotes: true         
    }
  })
  ]
})
