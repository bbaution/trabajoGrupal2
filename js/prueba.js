//Declaramos una colección llamda noticias a la que luego agregaremos objetos que en este caso tomarán el nombre de singleNews.
let noticias=[];




//Esta función permite agregar noticias/singleNews(elemento) a la coleción noticias creada al inicio de todo.
function agregar(){

	// Creamos un objeto llamado singleNews cuyos atributos toman el valor de los inputs que están en el modal.

	let singleNews = {

		Título : document.getElementById('titulo').value,
		Texto : document.getElementById('texto').value,
		Img : document.getElementById('imagen').value,
		Autor : document.getElementById('autor').value,
		Publicación : false,

	};
	
	//Obtengo el formulario a partir del id y llamo al método reset cuya función es limpiar todos los elementos hijos en el formulario, es decir, limpia todos los inputs del form.
	document.getElementById('formulario').reset();

	//Agrego una noticia/elemento(singleNews) a la coleción noticias creada anteriormente.
	noticias.push(singleNews);

	//Llamo a la función recorrer para que itere(recorra) la colección(noticias) y las agregue en el html.
	recorrer();
	
}


// Obtengo el elemento tbody del html mediante el id
let fila = document.getElementById('filas');


//Creo una función que va a recorrer la coleción(noticias) usando el forEach.
function recorrer(){
	fila.innerHTML='';

	noticias.forEach(function(elemento,index){

		//Creo la variable publicar y le asigno el valor publicar.
		let publicar = 'Publicar'; 
		//Creo la variable bacground y le asigno el valo vacío.
		let background = '';


		//En este condicional pregunto si la variable publicación en el objeto  es true; recordemos que por defecto en un objeto singleNews el valor de Publicación es igual false, es decir que inicialmente una noticia agregada no está publicada.

		// Si la variable es true significa que la noticia está publicada, por lo tanto:
		// 	*Ingresa al if.
		//	*La variable publicar toma el valor "No publicar" que es agregado al boton en el html.
		//	*La variable background toma el valor "bg-danger" la cual también se agrega al html y 
		//	le da el fondo rojo que necesita una noticia publicada.

		// Si es false entonces quiere decir que la noticia(singlenNews) no está publicada.
		//Como la condición es falsa no ingresa al if y mantiene el botón en "publicar" y el backgorund vacío, en este caso estará en blanco, que es el que trae por defecto.
		

		if(elemento.Publicación){

			publicar = 'No publicar';
			background = 'bg-danger';
		}

		fila.innerHTML +=/* `<tr class="${background}">
		<th scope="row">${index+1}</th>
		<td>${elemento.Título}</td>
		<td>${elemento.Texto}</td>
		<td><img src="${elemento.Img}" style="width: 150px; height: 150px"></td>
		<td>${elemento.Autor}</td>
		<td><button type="button" class="btn btn-danger" onclick="borrar(${index})">Borrar</button></td>
		<td><button type="button" class="btn btn-info" onclick="publicarNoticia(${index})">${publicar}</button></td>
		</tr>
		*/
		`
		<div class="col-12 col-md-6">
		<div class="item shadow mb-4">
		<img class="item-image" src=${elemento.Img}>
		<h3 class="item-title">${elemento.Título}</h3>
		<div class="item-details">
	   <h4 class="item-price">${elemento.Texto}</h4>
	   <button class="item-button btn btn-warning addToCart">AÑADIR AL CARRITO</button>
	   </div>
	   </div>
	   </div>
	   <div class="col-4">
		   <div
			   class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
			   <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
				   value="1">
			   <button class="btn btn-danger buttonDelete" type="button">X</button>
			   <button type="button" class="btn btn-danger" onclick="borrar(${index})">Borrar</button>
		   </div>
	   </div>
   </div>

		`
	})};




	//La función borrar permite eliminar una noticia/elemento/singleNews(fila) de la coleción(noticias) creada al inicio de todo.

	//Es importante que esta función reciba el índice que le corresponde a ese elemento de la colección.
	// Dicho índice se lo pasamos en la función recorrer, más precisamente cuando agregamos el botón borrar con la función innerHTML (línea 73).

	function borrar(indice){

		//Aquí llamamos a la coleción noticias, luego a la función splice y le pasamos dos parámetros:
		//El primero indica desde que posición vamos a eliminar en nuestra colección.
		//El segundo cuántos elementos.
		//Como cada elemento de nuestra colección es una noticia y queremos eliminar sólo una, le pasamos la posición(indice) correspondiente a esa noticia y el númrero 1.
		//Finalmente una noticia/elemnto/singleNews(fila) es eliminado.

		noticias.splice(indice,1);

		//delete noticias[indice]----> no prestar atención;

		//Limpiamos el HTML para que no se repita.
		fila.innerHTML = '';

		//Llamamos a la función recorrer para reccorrer nuevamente nuestra coleción y mostrarla en el html sin el elemnto que se borró.
		recorrer();

	}

	// Esta función nos va a permitir cambiar el estado de una noticia, es decir, va a modificar la variable Publicación de una singleNews.
	// Debe recibir el índice que le corresponde a ese elemento de la colección.
	//Cabe agregar que esta función es llamada en el atributo onclick del botón "publicar" que es agregado con el innerHTML en la función recorrer(línea 74).
	function publicarNoticia(indice){

		//En este condicional preguntamos si el atributo Publicación de una noticia/elemento/singleNews es true, o sea, si está publicada la noticia.
		//En caso de ser true, cambiamos el valor de Publicación a false y recorremos la coleción.
		//En caso de ser false ingresa al else, cambiamos el valor de Publicación a true y recorremos la coleción.
		if(noticias[indice].Publicación){

			noticias[indice].Publicación=false;
			recorrer();


		}else{

			noticias[indice].Publicación=true;
			recorrer();

		}

	}