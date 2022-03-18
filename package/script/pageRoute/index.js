

// 启用懒加载
// const Index =React.lazy(()=>import('../pages/index'))

import Index from '../pages/index';

const App=()=>{
 const routes=useRoutes([
  {path:'/',element:<Index></Index>}
])
 return routes;
}

const template=`import React from 'react';
import { useRoutes } from "react-router-dom";`

export default ()=>{
 return(
  <App></App>
 )
}

const pageRouter=()=>{


}

module.exports=pageRouter 