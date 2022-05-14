function eachCons(arr, n){
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		res.push(arr.slice(i, n + i));
	}
	res = res.filter((x) => x.length === n);
	console.log(res);
}
eachCons([ 1, 2, 3, 4 ], 2);
eachCons([ 1, 2, 3, 4 ], 3);
