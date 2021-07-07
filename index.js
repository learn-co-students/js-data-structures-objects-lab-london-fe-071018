// Write your solution in this file!

const driver = {
  type: 'Ferrari'
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const cloneDriver = Object.assign({}, obj);
  cloneDriver[key] = value;
  return cloneDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const clonedObj = Object.assign({}, obj);
  delete clonedObj[key];
  return clonedObj;
}


function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
