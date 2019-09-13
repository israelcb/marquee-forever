// Quando clicar com o direito em qualquer elemento...
window.addEventListener('contextmenu', function(e) {

	// Bloqueia a janelinha que aparece...
	e.preventDefault();

	// Captura o elemento e o seu pai
	let elemento = event.target;
	let paiElemento = elemento.parentNode;

	// Cria o marquinhos
	let marquee = document.createElement('marquee');

	elemento.remove();
	marquee.appendChild(elemento);
	paiElemento.appendChild(marquee);
});