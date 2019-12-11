'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	if (array.length === 1 && array[0] === target) return true;
// 	let newArray = array.slice()
// 	while (newArray.length > 1) {
// 		const half = Math.ceil(newArray.length / 2)
// 		if (newArray[half] === target) return true;
// 		target > newArray[half] ?
// 			newArray = newArray.slice(half + 1) :
// 			newArray = newArray.slice(0, half)
// 	}
// 	if (newArray.length === 1 && newArray[0] === target) return true;
// 	return false
// };

// const binarySearch = (array, target) => {
// 	if (array.length === 1 && array[0] === target) return true;
// 	while (array.length > 1) {
// 		const half = Math.ceil(array.length / 2)
// 		if (array[half] === target) return true;
// 		target > array[half] ?
// 			array.splice(0, half) :
// 			array.splice(half)
// 		console.log(array)
// 	}
// 	if (array.length === 1 && array[0] === target) return true;
// 	return false
// };

const binarySearch = (array, target) => {
	if (array[array.length - 1] === target || array[0] === target) return true;
	let pointer = Math.ceil(array.length / 2)
	let counter = Math.log(array.length)
	while (pointer !== array.length && pointer !== 1 && counter > 0) {
		// console.log(pointer, array[pointer])
		if (array[pointer] === target) return true;
		target > array[pointer] ?
			pointer = Math.floor(pointer * 1.5) :
			pointer = Math.floor(pointer * .5)
		counter--
	}
	if (array[pointer] === target) return true;
	return false
}


const test1 = [1, 3, 4, 5, 10, 15, 20, 22, 23, 98, 1000];
const test2 = [-3, -2, 0, 9, 10, 11, 12, 15, 17, 18, 19, 20];
const test3 = [-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5];

console.log(binarySearch(test1, 5000))
console.log(binarySearch(test2, -3))
console.log(binarySearch(test2, 20))
console.log(binarySearch(test3, 2.6))
console.log(binarySearch(test2, 25))
console.log(binarySearch(test3, 4))
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
