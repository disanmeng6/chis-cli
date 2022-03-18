
const fs=require('node:fs');
const path=require('node:path');
const routeTemplate=require('./routeTemplate');
const pagesRoutes=require('./pageRoute');
// 如果Troute 为一表示用户使用了userouter的方式创建 
// 如果Troute为二表示用户选中了文件夹的方式
const useRouter=()=>{
   fs.writeFile('./src/routes/route.tsx',routeTemplate,function(err,data){
   })
}
const pageRouter=async ()=>{
   // get src/oages directory 
   const files=fs.readdirSync('./src/pages');
   pagesRoutes(files)
}
module.exports=(Troute=1)=>{
   if(Troute==1){
      useRouter()
   }else if(Troute==2){
      pageRouter()
   }else{
       throw('Troute is error')
   }

}
