
import React from 'react';
import { useRoutes } from "react-router-dom";

// 启用懒加载
// const Index =React.lazy(()=>import('../pages/index'))

import Index from '../pages/index';

const App=()=>{
 const routes=useRoutes([
  {path:'/',element:<Index></Index>}
])
 return routes;
}

export default ()=>{
 return(
  <App></App>
 )
}