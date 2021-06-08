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
a_popup.href = "javascript:setPopUpHide()";
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
