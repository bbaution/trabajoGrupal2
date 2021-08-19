const peliculasJson = localStorage.getItem('peliculas'); // Traer de localStorage el dato asociado a la key "usuarios".
let pelicula = JSON.parse(peliculasJson) || []; // Convertir datos en formato JSON a código JavaScript.

//Esta función agregar pelicula
function agregar(){
	let datosPeliculas = {
		Título : document.getElementById('titulo').value,
		Texto : document.getElementById('texto').value,
		Img : document.getElementById('imagen').value,
		Publicación : false,
	};	
	document.getElementById('formulario').reset();
	pelicula.push(datosPeliculas);
	recorrer();
	
	const peliculasJson = JSON.stringify(pelicula); // Convertir datos al formato JSON.
    localStorage.setItem('peliculas', peliculasJson); // Guardar en localStorage.
}

let fila = document.getElementById('filas');

//función que recorre usando el forEach.
function recorrer(){
	fila.innerHTML='';

	pelicula.forEach(function(elemento,index){
		fila.innerHTML +=`
		<div class="row shoppingCartItem">
		<div class="col-4 d-flex">
		<div class="shopping-cart-item item shadow mb-4">
		<img class="item-image shopping-cart-image imagenAdm" src=${elemento.Img}>
		<h3 class="item-title shoppingCartItemTitle">${elemento.Título}</h3>
		<h4 class="item-price shoppingCartItemPrice">$ ${elemento.Texto}</h4>
		<div class="item-details">
	   <button type="button" class="btn btn-danger" onclick="borrar(${index})"><i class="fas fa-times"></i></button>
	   </div>
	   </div>
	   </div>
   </div>
   </div>
`
	})};
recorrer();

//La función borrar 
	function borrar(indice){
		pelicula.splice(indice,1);

		fila.innerHTML = '';
//función recorrer para mostrar en el html sin el elemento que se borró.
		recorrer();
	}

	