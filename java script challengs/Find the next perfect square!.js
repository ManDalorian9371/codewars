function findNextSquare(sq){
	// Return the next square if sq is a perfect square, -1 otherwise
	let sqrt = Math.sqrt(sq);

	if (sqrt % 1 === 0) return Math.pow(sqrt + 1, 2);
	else return -1;
}
