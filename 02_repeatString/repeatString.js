const repeatString = function (string, times) {
  let tempString = string;
  let resultString = "";
  if (times < 0) {
    return "ERROR";
  }
  for (i = 0; i < times; i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
