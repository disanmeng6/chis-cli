const fs =require('node:fs');
const path = require('node:path');

const getRouter =require('./getRouter');
const {Troute}=require('../../chis.config');

 module.exports=()=>{
  getRouter(Troute)
 }