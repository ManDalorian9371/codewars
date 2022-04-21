function spinWords(string){
	let spin = string.split(' ').map((x, i) => (x.length >= 5 ? x.split('').reverse().join('') : x)).join(' ');
	return spin;
}
