// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b){
	console.log(Number(a) / Number('1' + '0'.repeat(a.length)));
	let fixed = Number(a) + Number(b);
}
add('7212132222222222222222222222222222222231', '21312321312321213312312');
