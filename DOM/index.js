class Producto {
    constructor (nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}

var arrayProductos = [];
do{    
    var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    while (comprobacion === ""){
        var comprobacion = prompt("No ha ingresado un producto.\nIngrese un nombre del producto o fin para terminar de agregar");
    }
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }  else{
        nombreP = comprobacion;
        var precioP = prompt("Ingrese el precio del producto");
        var detalleP = prompt ("Ingrese el detalle del producto");
        var cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
} 
while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Precio $: ${producto.precio}</p>
                            <p> Cantidad: ${producto.cantidad}</p>
                            <p> Detalle: ${producto.detalle}</p>`;
document.body.appendChild(contenedor);
}

// POCO STOCK - MENOS DE 3 PRODUCTOS

var pocoStock = arrayProductos.filter (producto => producto.cantidad <= 3 );
document.write(`<h2> Lista de Productos con poco Stock (menos de 3 unidades): </h2>`);
for (let producto of pocoStock) {
    let contenedor = document.createElement ("div");
    contenedor.innerHTML=   `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Cantidad: ${producto.cantidad}</p>
                            <p> Detalle: ${producto.detalle}</p>`;
document.body.appendChild(contenedor);
}

// PRODUCTOS SIN STOCK

var sinStock = arrayProductos.filter (producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write(`<h2> Lista de Productos sin Stock (cantidad = 0): </h2>`);
for (var producto of sinStock) {
    document.write(`<h2> Lista de Productos con poco Stock (menos de 3 unidades): </h2>`);
    let contenedor = document. createElement ("div");
    contenedor.innerHTML =  `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Cantidad: ${producto.cantidad}</p>
                            <p> Detalle: ${producto.detalle}</p>`;
document.body.appendChild(contenedor);
}