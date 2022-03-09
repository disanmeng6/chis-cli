
const path=require('path');

module.exports={
 entry:path.join(__dirname,'../src/main.tsx'),
 module:{
  rules:[
   {
    test: /.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  },
  {
   test: /\.less$/i,
   use: [
     // compiles Less to CSS
    'style-loader',
        'css-loader',
      'less-loader',
        ],
    },      
   {
     test: /\.css$/i,
     use: ["style-loader", "css-loader"],
   }
  ],
 },
 resolve: { // 2. 添加这里代码
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
}
}