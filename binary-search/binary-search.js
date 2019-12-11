'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 1 && arr[0] === target) return true;
	while (array.length > 1) {
		const half = Math.ceil(array.length/2)
		if (array[half] === target) return true;
		target > array[half] ?
		array.splice(0, half) :
		array.splice(half + 1, half)
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch