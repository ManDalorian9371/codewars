function findOdd(A){
	for (let i = 0; i < A.length; i++) {
		let counter = 1;
		for (let j = 0; j < A.length; j++) {
			if (i !== j && A[i] === A[j]) {
				counter++;
			}
		}
		if (counter % 2 !== 0) {
			return A[i];
		}
	}
}
