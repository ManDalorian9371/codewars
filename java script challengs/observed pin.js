function getPINs(observed){
	// TODO: This is your job, detective!
	let keys = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	let misKeys = [ '08', '124', '1235', '236', '1457', '24568', '3695', '478', '05789', '698' ];
	let str = observed;
	str = str.split('');

	console.log(str);
	let total = 1;
	let t = [];
	for (let ele of str) {
		t.push(misKeys[keys.indexOf(ele)]);
	}
	console.log(t);
	total = t.reduce((acc, x) => acc * Number(x.length), 1);
	console.log(total);

	let bb = [];
	let rnd = (i) => t[i][Math.ceil(Math.random() * t[i].length) - 1];
	while (bb.length < total) {
		let newEl = [ ...Array(observed.length) ].map((x, i) => rnd(i));
		newEl = newEl.join('');
		if (bb.indexOf(newEl) === -1) {
			bb.push(newEl);
		}
	}
	return bb;
}
console.log(getPINs('45'));
