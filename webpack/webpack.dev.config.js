
const WebpackMerge=require('webpack-merge');
const baseWenbackConfig=require('./webpack.base.config');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports=WebpackMerge.merge(baseWenbackConfig,{
 mode:'development',
 plugins:[
  new HtmlWebpackPlugin({
   filename:"index.html",
   template:'public/index.html',
  })
 ],
   // 开发环境本地启动的服务配置
   devtool: 'eval-source-map',
   devServer: {
     host: 'localhost',
     port: 8080,
     // 要求每次都返回HTML，不配置会出现can not GET/
     historyApiFallback: true,
     hot: true
   }
})