#!/usr/bin/env node

const script =require('../script') ;
const chisConfig= require('../../chis.config');
const promise=new Promise((resolve,reject)=>{
 reject(console.log(111))
})

script();

console.log(chisConfig)
process.on('unhandledRejection', err => {
  // throw err;
  console.log(222)
})
console.log(process.env.NODE_ENV);
console.log(process.argv)
// process.exitCode=1;

