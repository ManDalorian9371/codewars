function nextBigger(n){
	//your code here
	// maybe go for just changing a digit if it is bigger than the left one
	let newArr = n.toString().split('').map((x) => Number(x));
	let posi = [];
	let tot = newArr.reduce((acc, x, i) => acc * (i + 1), 1);
	let rnd = () => newArr[Math.ceil(Math.random() * newArr.length) - 1];
	while (posi.length != tot) {
		let nPosi = Number([ ...Array(newArr.length) ].map((x, i, a) => rnd()).map((x) => x.toString()).join(''));
		if (posi.indexOf(nPosi) == -1) {
			let counter = 0;
			newArr.forEach((x) => {
				if (nPosi.toString().split('').indexOf(x.toString()) == -1) {
					counter++;
				}
			});
			if (counter == 0) {
				posi.push(nPosi);
			}
		}
	}

	posi.sort((a, b) => a - b);

	let res = posi[posi.indexOf(n) + 1];
	if (res == n) {
		return -1;
	} else {
		return res;
	}
}
