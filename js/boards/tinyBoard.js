var tinyBoard = document.getElementById('3x3');
tinyBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 3,
		setColumns: 3,
		setLimit: 4,
		setMultiplier: 3,
		numberOfCombinations: 900,
		setSize: 500,
	};
	setClearClock();
	startTimer();
	setCreateNumbers();
});
