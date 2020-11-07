var smallBoard = document.getElementById('4x4');
smallBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 4,
		setColumns: 4,
		setLimit: 6,
		setMultiplier: 4,
		numberOfCombinations: 1600,
	};
	createNumbers();
});
