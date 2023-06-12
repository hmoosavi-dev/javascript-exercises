const reverseString = function (string) {
  const holderArray = [];
  let slength = string.length;
  for (i = 0; i < slength; i++) {
    holderArray[i] = string.slice(i, i + 1);
    console.log(holderArray);
  }
  holderArray.reverse();
  let resultString = holderArray.join("");
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
