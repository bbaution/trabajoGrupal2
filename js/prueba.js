const peliculasJson = localStorage.getItem('peliculas');
let pelicula = JSON.parse(peliculasJson) || []; 
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
	
	const peliculasJson = JSON.stringify(pelicula);
    localStorage.setItem('peliculas', peliculasJson); 
}

let fila = document.getElementById('filas');

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

	function borrar(indice){

		pelicula.splice(indice,1);

		fila.innerHTML = '';
	
		recorrer();

	}

