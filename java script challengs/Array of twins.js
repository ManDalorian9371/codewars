// You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times.
//If true, return true, otherwise false. Your solution should not modify the input array.

function twins(arry){
	let resultToReturn = 0;
	for (let i = 0; i < arry.length; i++) {
		// nested for loop
		for (let j = 0; j < arry.length; j++) {
			// prevents the element from comparing with itself
			if (i !== j) {
				// check if elements' values are equal
				if (arry[i] === arry[j]) {
					//  duplicate element present
					resultToReturn++;
				}
			}
		}
	}
	return resultToReturn == arry.length;
}
