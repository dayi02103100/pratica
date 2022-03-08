//POO
//this va a hacer referencia a los valores del objeto
//this guarda los valores dentor de una variable         

//object literal
const producto = {
    nombre ='tablet',
    precio: 500
}

//object contructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return`El cliente ${this.nombre} ${this.apellido}`;

}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){
    return `el producto ${this.nombre} tiene un precio de: ${this.precio}`;
    
}
console.log(cliente);

function formatearProducto(producto){
    return `el producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const producto2 = new Producto('Monitor curvo de 40', 800);
const producto3 = new Producto('laptop', 300);

const cliente = new Cliente('juan', 'de la torre');

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());