//create body
var body = document.querySelector("body");
//create left menu
var inputLeft = document.createElement("input");
var nav_left = document.createElement("nav");
var h2_left = document.createElement("h2");
var logo_header = document.createElement("div");
var list_left = document.createElement("ul");
var newGameButton = document.createElement("li");
var formList = document.createElement("li");
var board_checked = document.createElement("form");
var board_partHeader = document.createElement("p");
var board_partOne = document.createElement("p");
var board_partTwo = document.createElement("p");
var board_partThree = document.createElement("p");
var board_partFour = document.createElement("p");
var board_partFive = document.createElement("p");
var board_partSix = document.createElement("p");
//create right menu
var inputRight = document.createElement("input");
var nav_right = document.createElement("nav");
var h2_right = document.createElement("h2");
var list_right = document.createElement("ul");
var scoreButton = document.createElement("li");
var top_score = document.createElement("li");
//create central box
var centralBox = document.createElement("div");
var infoBox = document.createElement("div");
var box = document.createElement("div");
var form = document.createElement("form");
var span = document.createElement("span");
var inputWatch = document.createElement("input");
var moves = document.createElement("div");
//create popup
var b_popup = document.createElement("div");
var b_popup_content = document.createElement("div");
var b_popup_box = document.createElement("div");
var a_popup = document.createElement("a");
var victory_popup = document.createElement("div");


//filling left menu
inputLeft.id = "nav-toggle_left";
inputLeft.type = "checkbox";
inputLeft.hidden = "";
nav_left.classList.add("nav_left");
nav_left.innerHTML = "<label for='nav-toggle_left' class='nav-toggle_left' onclick></label>"
h2_left.classList.add("logo");
logo_header.classList.add("logo_header");
logo_header.innerHTML = "GEM PUZZLE";
newGameButton.innerHTML = '<button id="reset" class="menu_button" type="button" name="button">New Game</button>';
board_checked.classList.add("board_checked");
board_partHeader.innerHTML = "Change board size:";
board_partOne.innerHTML = '<input id="3x3" name="board" type="radio" value="nedzen">3x3';
board_partTwo.innerHTML = '<input id="4x4" name="board" type="radio" value="nedzen" checked>4x4';
board_partThree.innerHTML = '<input id="5x5" name="board" type="radio" value="nedzen">5x5';
board_partFour.innerHTML = '<input id="6x6" name="board" type="radio" value="nedzen">6x6';
board_partFive.innerHTML = '<input id="7x7" name="board" type="radio" value="nedzen">7x7';
board_partSix.innerHTML = '<input id="8x8" name="board" type="radio" value="nedzen">8x8';
//filling right menu
inputRight.id = "nav-toggle_right";
inputRight.type = "checkbox";
inputRight.hidden = "";
nav_right.classList.add("nav_right");
nav_right.innerHTML = "<label for='nav-toggle_right' class='nav-toggle_right' onclick></label>";
h2_right.classList.add("logo");
scoreButton.innerHTML = '<button class="menu_button" id="reset" type="button" name="button">Score</button>';
top_score.innerHTML = '<div class="top_score" id="top_score"></div>'
//filling central box
centralBox.id = "centralBox";
infoBox.id = "infoBox";
box.id = 'box';
form.name = 'myForm';
span.id = 'time';
inputWatch.id = 'watch';
inputWatch.name = 'stopwatch';
inputWatch.size = '10';
inputWatch.value = '00:00:00.00'
inputWatch.disabled = '';
moves.id = 'moves';
//filling popup
b_popup.classList.add("b-popup");
b_popup.id = "popup1";
b_popup_content.classList.add("b-popup-content");
b_popup_box.classList.add("b_popup_box");
a_popup.href = "javascript:PopUpHide()";
a_popup.classList.add("cross");
a_popup.innerHTML = '<img class="vertical_align_middle" src="assets/icons/cross.svg">';
victory_popup.id = "victory";
victory_popup.classList.add("victory");

//placement left menu
document.body.appendChild(inputLeft);
document.body.appendChild(nav_left);
nav_left.appendChild(h2_left);
h2_left.appendChild(logo_header);
h2_left.appendChild(list_left);
list_left.appendChild(newGameButton);
list_left.appendChild(formList);
formList.appendChild(board_checked);
board_checked.appendChild(board_partHeader);
board_checked.appendChild(board_partOne);
board_checked.appendChild(board_partTwo);
board_checked.appendChild(board_partThree);
board_checked.appendChild(board_partFour);
board_checked.appendChild(board_partFive);
board_checked.appendChild(board_partSix);
//placement right menu
document.body.appendChild(inputRight);
document.body.appendChild(nav_right);
nav_right.appendChild(h2_right);
h2_right.appendChild(list_right);
list_right.appendChild(scoreButton);
list_right.appendChild(top_score);
//placement central box
document.body.appendChild(centralBox);
centralBox.appendChild(infoBox)
centralBox.appendChild(box);
infoBox.appendChild(form);
form.appendChild(span);
form.appendChild(inputWatch);
infoBox.appendChild(moves);
//placement popup box
document.body.appendChild(b_popup);
b_popup.appendChild(b_popup_content);
b_popup_content.appendChild(b_popup_box);
b_popup_box.appendChild(a_popup);
b_popup_box.appendChild(victory_popup);


var arr = [], emptyRow, emptyColumn;
var playerMoves = 0;
var score = [];
var victoryMessage = document.getElementById('victory');
var top_score = document.getElementById('top_score')
var watchTime = document.getElementById('watch')
moves.innerHTML =`Moves: 0`;
time.innerHTML =`Time: `;

//keysound
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

let startBoard = {
	setRows: 4,
	setColumns: 4,
	setLimit: 6,
	setMultiplier: 4,
	numberOfCombinations: 1600,
	setSize: 500,
}

function swap(arr,i1,j1,i2,j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}

window.onload = function() {
	PopUpHide();
	box = document.getElementById("box");
	createNumbers();
	document.getElementById("reset").onclick = () => {
		createNumbers();
		ClearСlock();
		startTimer();
	}
}
console.log(imageSrc)



function cellClick(event) {
	var event = event || window.event,
		element = event.srcElement || event.target,
		emptyElement = document.getElementById(emptyRow + " " + emptyColumn),
		//get the number of the row and column at the intersection of which the cell is located.
		i = element.id.charAt(0),
		j = element.id.charAt(2);
		/*if empty cell is located in the same row or the same column with the cell that was clicked,
		then their contents are swapped*/
	if((i == emptyRow && Math.abs(j - emptyColumn) == 1) || (j == emptyColumn && Math.abs(i - emptyRow) == 1)){
		document.getElementById(emptyRow + " " + emptyColumn).innerHTML = element.innerHTML;
		element.innerHTML = "";
		element.style.backgroundColor = "#56526a";
		//changing the color of a previously empty element
		emptyElement.style.backgroundColor = "#4d495f";
		//remember a position of the empty cell
		emptyRow = i;
		emptyColumn = j;
		var checkVictory = true;
		//write moves
		playerMoves += 1;
		moves.innerHTML =`Moves: ${playerMoves}`;
		//moving sound
		soundHandler('./assets/sounds/tink.wav');
		//checked a winning combination
		for(i = 0; i < startBoard.setRows; ++i)
			for(j = 0; j < startBoard.setColumns; ++j)
				if(i + j != startBoard.setLimit && document.getElementById(i + " " + j).innerHTML != i * startBoard.setMultiplier + j + 1){
					checkVictory = false;
					break;
				}
				if(checkVictory) {
					victoryMessage.innerHTML = `Congratulations! You solved the puzzle in ${watchTime.value} and ${playerMoves} moves`;
					localStorage.setItem('result', victoryMessage.innerHTML);
					if (score.length <= 9) {
						score.push(localStorage.getItem('result').substring(42));
					}
					else {
						score.pop();
						score.push(localStorage.getItem('result').substring(42));
					}
					top_score.innerHTML = score.join('<br><br>');
					PopUpShow();
					ClearСlock();
					createNumbers();
				}
	}
}

//added array with N elements
function createNumbers(){
	playerMoves = 0;
	for(rows = 0; rows < startBoard.setRows; ++rows){
		arr[rows] = []
		for(columns = 0; columns < startBoard.setColumns; ++columns){
			if(rows + columns != startBoard.setLimit)
				arr[rows][columns] = rows * startBoard.setMultiplier + columns + 1;
			else
				arr[rows][columns] = "";
		}
	}

//mix created elements on array
	emptyRow = (startBoard.setRows - 1);
	emptyColumn = (startBoard.setRows - 1);
	for(i = 0; i < startBoard.numberOfCombinations; ++i)
		switch(Math.round((startBoard.setRows - 1) * Math.random())){
			// up
			case 0: if(emptyRow != 0) swap(arr,emptyRow,emptyColumn,--emptyRow,emptyColumn); break;
			// right
			case 1: if(emptyColumn != (startBoard.setRows - 1)) swap(arr,emptyRow,emptyColumn,emptyRow, ++emptyColumn); break;
			// down
			case 2: if(emptyRow != (startBoard.setRows - 1)) swap(arr,emptyRow,emptyColumn,++emptyRow,emptyColumn); break;
			// left
			case 3: if(emptyColumn != 0) swap(arr,emptyRow,emptyColumn,emptyRow,--emptyColumn);
		}

//create a board
var board = document.createElement("board");
board.style.display = "flex";
board.style.flexDirection = "column";
board.style.justifyContent = "center";
board.style.alignItems = "center";
board.style.width = startBoard.setSize + "px";
board.style.height = startBoard.setSize + "px";
for(i = 0; i < startBoard.setRows; ++i) {
	//added rows in the table
	var row = document.createElement("row");
	row.id = "row";
	row.style.display = "flex";
	row.style.flexDirection = "row"
	for(j = 0; j < startBoard.setColumns; ++j) {
		//create cells in the table
		var cell = document.createElement("cell");
			cell.style.display = "flex";
			cell.style.justifyContent = "center";
			cell.style.alignItems = "center";
			cell.style.color = "white";
			cell.style.border = "solid white 1px"
			cell.style.fontSize = "40px";
			cell.style.minWidth = "55px";
			cell.style.minHeight = "55px";
			cell.style.margin = "2px";
			cell.style.backgroundColor = "#4d495f"

			cell.id = i + " " + j;
			//bind function on click to a cell
			cell.onclick = cellClick;
			//recording element in cell
			cell.innerHTML = arr[i][j];
			//color of the first empty cell
			if (cell.innerHTML == '') {
				cell.style.backgroundColor = "#56526a"
			}
			//added row in table
			row.appendChild(cell);
	}
	board.appendChild(row);
}
//check if the element has a table
	if(box.childNodes.length == 1)
		box.removeChild(box.firstChild);
		box.appendChild(board);
}
