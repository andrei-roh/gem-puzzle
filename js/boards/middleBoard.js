var middleBoard = document.getElementById('5x5');
middleBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 5,
		setColumns: 5,
		setLimit: 8,
		setMultiplier: 5,
		numberOfCombinations: 2000,
		setSize: 500,
	};
	setClearClock();
	startTimer();
	setCreateNumbers();
});
