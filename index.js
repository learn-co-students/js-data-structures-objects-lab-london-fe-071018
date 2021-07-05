// Write your solution in this file!

const driver = {driverName:'SAM'};


function updateDriverWithKeyAndValue(driver, key, value){
  const newClone ={...driver};
  newClone[key]=value;
  return newClone;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newClone2=Object.assign({},driver);
  delete newClone2[key];
  return newClone2;
} 

function destructivelyDeleteFromDriverByKey(driver, key){
  // delete driver[key];
  // return driver;
  return delete driver[key];
}