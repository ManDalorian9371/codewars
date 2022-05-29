function isPangram(string){
	let alp = 'abcdefghijklmnopqrstuvwxyz';
	alp = alp.split('');
	let res = string.toLowerCase().split(' ').join('').split('');
	let counter = 0;
	alp.forEach((x) => {
		if (res.indexOf(x) === -1) {
			counter++;
		}
	});
	if (counter === 0) {
		return true;
	} else {
		return false;
	}
}
