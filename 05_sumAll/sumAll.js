const sumAll = function (a, b) {
  let sumValue = 0;
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sumValue = sumValue + i;
    }
    return sumValue;
  } else {
    for (let i = b; i <= a; i++) {
      sumValue = sumValue + i;
    }
    return sumValue;
  }
};

// Do not edit below this line
module.exports = sumAll;
