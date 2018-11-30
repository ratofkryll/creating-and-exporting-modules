var numbers = [];

function sortedNumbers(input) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers;
};

module.exports = {
  pushToNumbers: function(input){
    numbers.push(input);
  },
  returnFinalNunber: function() {
    var sorted = sortedNumbers();
    return sorted;
  }
}
