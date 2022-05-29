function titleCase(title, minorWords){
	let mw = minorWords.split(' ').map((x) => x.toLowerCase());
	console.log(mw);
	let ttt = title.split(' ').map((x) => x.toLowerCase()).map((x, i, a) => {
		if (mw.indexOf(x) != -1 && i != 0) {
			return x;
		} else {
			let res = x.split('').map((x, i) => (i == 0 ? x.toUpperCase() : x)).join('');
			return res;
		}
	});

	return ttt;
}
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
