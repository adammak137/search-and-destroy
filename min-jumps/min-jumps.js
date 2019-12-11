'use strict';

// Complete this algo
const minJumps = arr => {
  let pointer = 0
  let counter = 0

  while (pointer <= arr.length) {
    counter++
    if (pointer + arr[pointer] >= arr.length) return counter
    const jumpPointer = arr[pointer]
    const tempArray = []
    for (let compare = pointer; compare <= jumpPointer; compare++) {
      tempArray.push(arr[compare] + compare)
      console.log('after jumpPointer', jumpPointer)
      console.log('after temp array', tempArray)
    }
    console.log(tempArray.indexOf(Math.max(tempArray)))
    pointer += (tempArray.indexOf(Math.max(tempArray)) + 1)
  }

  // return counter
};

const test1 = [1, 1];
const test2 = [6, 3, 2, 1];
const test3 = [2, 8, 4, 3, 2, 9, 6, 8];
const test4 = [4, 4, 2, 7, 1, 1, 1, 1, 3, 7, 2];
const test5 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3];

console.log(minJumps(test1))
// console.log(minJumps(test2))
// console.log(minJumps(test3))
// console.log(minJumps(test4))
// console.log(minJumps(test5))


module.exports = minJumps
