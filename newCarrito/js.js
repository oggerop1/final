// en esta constante es donde voy a poner con el foreach lo que tiene catalogo.js
const contenedorCatalogo = document.getElementById('contenedorCatalogo');

// creo el carrito vacio
const carrito =[];

catalogoProductos.forEach(producto => {
    // creo nodo div
    const div = document.createElement('div');
    
    //le asigno la clase producto del css
    div.classList.add('producto');

    // en  const div: le insertamos el html, es decir inserto las propiedades del catalogo.js
    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>   
                    <p>${producto.desc}</p>
                    <p>${producto.talle}</p>
                    <p class="precioProducto">Precio:$ ${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas-fa-shopping-cart"></i></button>
                    `
    contenedorCatalogo.appendChild(div);

    // en boton tomo el valor del id de button con id agregar
    const boton = document.getElementById(`agregar${producto.id}`);

    //agrego un addEventListener que ejecuta la funcion agregarProductoAlCarrito
    boton.addEventListener('click', ()=>{
        agregarProductoAlCarrito(producto.id);
    })
});


// funcion para agregar items al carrito
const agregarProductoAlCarrito = (productoId)=>{

    // con el find hago la busqueda en el catalogo por el id que se le pasa por parametro
    const item = catalogoProductos.find((prod)=> prod.id ===productoId);
    
    // con el push agrego el item al carrito
    carrito.push(item);

    console.log(carrito);
}


// funcion para actulaizar carrito
const contenedorProductoCarrito =  document.getElementById('carritoProductoContenedor');

const actulizarProductosCarrito= () =>{
    carrito.forEach((prod)=>{
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML=  `
                        <p>${prod.nombre}</p>
                        <p>Precio:${prod.precio}</p>
                        <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
                        <button onclick="eliminarProductoDelCarrito(${prod.id})" class="botonEliminarProducto"><i class="fas fa-trash-alt"></i></button>
                        `
    });
    contenedorProductoCarrito.appendChild(div);
}