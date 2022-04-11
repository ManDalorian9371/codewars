function isIsogram(str){
	let arr = str.toLowerCase().split('');
	let c = 0;
	arr.forEach((x, i, a) => {
		if (arr.lastIndexOf(x) != i) {
			c++;
		}
	});

	return c === 0;
}
