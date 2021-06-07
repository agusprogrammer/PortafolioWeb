window.onload=inicio; /*Acciones iniciales*/

/*Acciones iniciales*/
function inicio(){
	
	/* como en principio el formulario se nos 
	muestra, lo ocultamos al inicio */
	openCloseForm();
}

/* menu sidenav oculto */

/* Ponemos el width del menu de navegacion a 250px */
/* Abrimos el nav */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Ponemos el width del menu de navegacion a 0px */
/* Cerramos el nav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
   document.body.style.backgroundColor = "white";
} 

/* Abre y cierra el formulario */
function openCloseForm() {
	
	var elementFormDiv = document.getElementById("formContactDiv");
	
	if(elementFormDiv.style.display === "none") {
		elementFormDiv.style.display = "block";
		
		window.scroll({
			top: 5000,
			left: 5000,
			behavior: 'smooth'
		});
		
	} else {
		elementFormDiv.style.display = "none";
	}
}

/* control anti spam (metodo honey pot) */
function controlForm() {
	
	// Si el campo está vacío, envía el formulario.
	if(!document.getElementById("controlSpam").value) { 
		return true;
	}
	
	// Si el campo tiene algún valor, es un spam bot
	else {
		return false;
	}
}

/* detectar scroll y ocultar social bar cunado te acercas al footer
(oculta la social bar cuando se va al footer)*/
window.onscroll = function() {
	
	/* indica la posicion del scroll */
	var y = window.scrollY;
	var ocultElementSBar = document.getElementById("ocultaSocialBar"); 
	
	if(y > 3000){
		
		ocultElementSBar.style.display = "none"; /* ocultar */
		
	}else{
		
		ocultElementSBar.style.display = "block";	/* mostrar */
		
	}
	
}
	









