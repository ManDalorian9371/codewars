function getDivisorsCnt(n){
	let res = [];
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			res.push(i);
		}
	}
	return res.length;
}
