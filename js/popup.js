//POPUP
$(document).ready(function(){
		//Скрыть PopUp при загрузке страницы
		PopUpHide();
		startTimer();
});
//Функция отображения PopUp
function PopUpShow(){
		$("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
		$("#popup1").hide();
		startTimer();
}
