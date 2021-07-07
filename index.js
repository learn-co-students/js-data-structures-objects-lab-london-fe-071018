// Write your solution in this file!
let driver={};

const updateDriverWithKeyAndValue=(driver,v,k)=>Object.assign({}, driver,{[v]: k});
const destructivelyUpdateDriverWithKeyAndValue=(driver,v,k)=>{driver[v]=k; return driver;}
const deleteFromDriverByKey=(driver,v,k)=>Object.keys(driver).reduce((a,b)=>Object.assign(a,b==v?{}:{[b]: driver[b]}),{});
const destructivelyDeleteFromDriverByKey=(driver,v,k)=>delete driver[v];