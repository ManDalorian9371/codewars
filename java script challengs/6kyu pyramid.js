// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(n){
	// build here
	let arr = [];
	let sp = ' ';
	let st = '*';
	for (let i = 1; i <= n; i++) {
		arr.push(sp.repeat(n - i) + st.repeat((i - 1) * 2 + 1) + sp.repeat(n - i));
	}
	return arr;
}
