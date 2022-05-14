// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(ii){
	//   p  arr or string
	//   r  arr
	//   e  ABBCc => A , B , C , c
	//   p
	let arr = [];
	if (typeof ii === 'object') {
		arr = ii.join('').split('');
	} else {
		arr = ii.split('');
	}
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i - 1] && i > 0) {
		} else {
			res.push(arr[i]);
		}
	}
	if (Number.isInteger(ii[0])) {
		return res.map((x) => Number(x));
	}
	return res;
};
