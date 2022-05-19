const binaryArrayToNumber = (arr) => {
	let counter = 0;
	for (let i = arr.length - 1, j = 1; i >= 0; i--, j = j * 2) {
		counter += arr[i] * j;
	}
	return counter;
};
