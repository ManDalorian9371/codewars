// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s){
	let newS = s.toUpperCase().split('');
	let popy = '';
	let tiny = newS.map(function(x, i, a){
		for (t = 0; t < i; t++) {
			popy += x.toLowerCase();
		}
		let newX = x + popy;
		popy = '';
		return newX;
	});

	return tiny.join('-');
} //was a bit hard for me cuz i didnt know repeat method !!!!!
