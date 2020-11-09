var hugeBoard = document.getElementById('8x8');
hugeBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 8,
		setColumns: 8,
		setLimit: 14,
		setMultiplier: 8,
		numberOfCombinations: 6400,
		setSize: 500,
	};
	createNumbers();
});
