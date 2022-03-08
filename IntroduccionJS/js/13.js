//"use strict";//correr JS en modo estricto

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto);//.Freeze no permite agragar mas valores, ni ser modificado
producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

console.log(producto)