// i could not solve it because of time out

function dontGiveMeFive(start, end){
	let cunt = 0;
	let cc = start;
	while (cc <= end) {
		if (cc.toString().split('').includes('5') != true) {
			cunt++;
		}

		cc++;
	}

	return cunt;
}
