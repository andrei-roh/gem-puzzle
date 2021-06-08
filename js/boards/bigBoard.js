var bigBoard = document.getElementById('6x6');
bigBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 6,
		setColumns: 6,
		setLimit: 10,
		setMultiplier: 6,
		numberOfCombinations: 3600,
		setSize: 500,
	};
	setClearClock();
	startTimer();
	setCreateNumbers();
});
