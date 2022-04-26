function openOrSenior(data){
	let res = [];
	data.forEach((x, i, a) => {
		if (x[0] >= 55 && x[1] > 7) {
			res.push('Senior');
		} else {
			res.push('Open');
		}
	});
	return res;
	// ...
}
