// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
/*
 * i deconstructed data 
 * so i could have more control over the arrays
 */

const { first = [1] } = data || {};
const { second = [1] } = data || {};
const { third = [1] } = data || {};

const result = [];

const extractBiggest = () => {
  if (first[first.length - 1] > second[second.length - 1]) {
    return first;
  }

  if (third[third.length - 1] >= 1) {
    return third;
  }

  return second;
};


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)