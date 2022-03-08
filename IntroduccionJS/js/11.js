//Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

/*Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}*/


//console.log(producto.precio);

//console.log(producto.nombreProducto);

//console.log(producto.disponible);

//console.log(producto["precio"])



//----------------------------------


//agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.disponible;
console.log(producto);
