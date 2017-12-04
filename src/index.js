module.exports = function getPositiveKeysOfBoolset(array) {
  var resultArr = [];
  for (let i = 0; i < array.length; i += 2) {
  	let value = array[i];
  	let bool = array[i + 1];

  	if (bool) resultArr.push(value);
  }
  return resultArr;
}
