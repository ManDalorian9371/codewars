function stop(){
	let word;
	let arr = [];
	word = prompt('ask again');
	while (word != 'stop') {
		arr.push(word);
		word = prompt('ask again');
	}
	console.log(arr);
}
stop();
