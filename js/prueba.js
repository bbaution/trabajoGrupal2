const peliculasJson = localStorage.getItem('peliculas'); // Traer de localStorage el dato asociado a la key "usuarios".
let pelicula = JSON.parse(peliculasJson) || []; // Convertir datos en formato JSON a código JavaScript.

//Esta función permite agregar pelicula/datosPeliculas(elemento) a la coleción noticias creada al inicio de todo.
function agregar(){

	// Creamos un objeto llamado datosPeliculas cuyos atributos toman el valor de los inputs que están en el modal.

	let datosPeliculas = {

		Título : document.getElementById('titulo').value,
		Texto : document.getElementById('texto').value,
		Img : document.getElementById('imagen').value,
		Publicación : false,

	};
	
	//Obtengo el formulario a partir del id y llamo al método reset cuya función es limpiar todos los elementos hijos en el formulario, es decir, limpia todos los inputs del form.
	document.getElementById('formulario').reset();

	//Agrego una noticia/elemento(datosPeliculas) a la coleción noticias creada anteriormente.
	pelicula.push(datosPeliculas);

	//Llamo a la función recorrer para que itere(recorra) la colección(noticias) y las agregue en el html.
	recorrer();
	
	const peliculasJson = JSON.stringify(pelicula); // Convertir datos al formato JSON.
    localStorage.setItem('peliculas', peliculasJson); // Guardar en localStorage un dato asociado a la key "usuarios".
}


// Obtengo el elemento tbody del html mediante el id
let fila = document.getElementById('filas');


//Creo una función que va a recorrer la coleción pelicula) usando el forEach.
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



	//La función borrar permite eliminar una noticia/elemento/datosPeliculas(fila) de la coleción pelicula) creada al inicio de todo.

	//Es importante que esta función reciba el índice que le corresponde a ese elemento de la colección.
	// Dicho índice se lo pasamos en la función recorrer, más precisamente cuando agregamos el botón borrar con la función innerHTML (línea 73).

	function borrar(indice){

		//Aquí llamamos a la coleción pelicula, luego a la función splice y le pasamos dos parámetros:
		//El primero indica desde que posición vamos a eliminar en nuestra colección.
		//El segundo cuántos elementos.
		//Como cada elemento de nuestra colección es una noticia y queremos eliminar sólo una, le pasamos la posición(indice) correspondiente a esa noticia y el númrero 1.
		//Finalmente una noticia/elemnto/datosPeliculas(fila) es eliminado.

		pelicula.splice(indice,1);

		//delete pelicula[indice]----> no prestar atención;

		//Limpiamos el HTML para que no se repita.
		fila.innerHTML = '';

		//Llamamos a la función recorrer para reccorrer nuevamente nuestra coleción y mostrarla en el html sin el elemnto que se borró.
		recorrer();

	}

