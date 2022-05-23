//return the total number of smiling faces in the array
function countSmileys(arr){
	let res = [];
	arr.forEach((x, i, a) => {
		if (x[0] === ';' || x[0] === ':') {
			if (x[1] === ')' || x[1] === 'D') {
				res.push(x);
			} else if (x[1] === '-' || x[1] === '~') {
				if (x[2] === ')' || x[2] === 'D') {
					res.push(x);
				}
			}
		}
	});
	return res.length;
}
countSmileys([ ':)', ';(', ';}', ':-D' ]);
