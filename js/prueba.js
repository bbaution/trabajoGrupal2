//Declaramos una colección llamda pelicula a la que luego agregaremos objetos que en este caso tomarán el nombre de datosPeliculas.
let pelicula=[];

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
	
}


// Obtengo el elemento tbody del html mediante el id
let fila = document.getElementById('filas');


//Creo una función que va a recorrer la coleción pelicula) usando el forEach.
function recorrer(){
	fila.innerHTML='';

	pelicula.forEach(function(elemento,index){
		fila.innerHTML +=
		`
		<div class="col-12 col-md-6">
		<div class="item shadow mb-4">
		<h3 class="item-title">${elemento.Título}</h3>
		<img class="item-image" src=${elemento.Img}>
		<div class="item-details">
	   <h4 class="item-price">${elemento.Texto}</h4>
	   <button class="item-button btn btn-warning addToCart">AÑADIR AL CARRITO</button>
	   <button type="button" class="btn btn-danger" onclick="borrar(${index})">X</button>
	   </div>
	   </div>
	   </div>
	   <div class="col-4">
		   <div
			   class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
			   <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
			   
		   </div>
	   </div>
   </div>
`
	})};




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

