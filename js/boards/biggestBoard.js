var biggestBoard = document.getElementById('7x7');
biggestBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 7,
		setColumns: 7,
		setLimit: 12,
		setMultiplier: 7,
		numberOfCombinations: 4900,
		setSize: 500,
	};
	ClearСlock();
	startTimer();
	createNumbers();
});
