function recorrer(){
	fila.innerHTML='';

	pelicula.forEach(function(elemento,index){
		fila.innerHTML +=`
		<div class="row shoppingCartItem ms-lg-2 cardCliente">
		<div class="col-12 col-md-6 d-flex">
		<div class="shopping-cart-item item shadow mb-4 p-3">
		<h3 class="item-title shoppingCartItemTitle">${elemento.Título}</h3>
		<img class="item-image shopping-cart-image imagenCard" src=${elemento.Img}>
		<div class="item-details">
	   <h4 class="item-price shoppingCartItemPrice mx-2 my-4">$ ${elemento.Texto}</h4>
	   <button class="item-button btn btn-warning addToCart text-white">AÑADIR AL CARRITO</button>
	   </div>
	   </div>
`
	})};
recorrer();