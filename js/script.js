

/*---------------------toggle icon navbar----------------------------*/
let = menuIcon = document.querySelector("#menu-icon");
let = navbar = document.querySelector(".navbar");

let menuBtns = document.querySelectorAll("#menu_btns");


/*Cuando haga click en el ícono de MENU, el menú aparece/desaparece y el ícono cambia*/
menuIcon.onclick = () =>{
	menuIcon.classList.toggle("bi-x");
	navbar.classList.toggle("active");
};



/*Cuando haga click en algún botón de la barra de nav, el menú desaparece y el ícono cambia*/

menuBtns.forEach(btn=>btn.onclick=()=>{
	menuIcon.classList.toggle("bi-x");
	navbar.classList.toggle("active");
});



/*---------------------auto pop-up----------------------------*/
 const popup = document.querySelector('.popup');
 const close = document.querySelector('.close');


 window.onload = function () {
 	setTimeout(function(){
 		popup.style.display = 'block';
 	}, 2000)
 }

 close.addEventListener("click", ()=>{
 		popup.style.display = 'none';
 })









