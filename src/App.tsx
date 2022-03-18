import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import Routes from './routes';

export default ()=>{
  
 return(
   <Router>
     <Routes></Routes>
   </Router>
 )
}