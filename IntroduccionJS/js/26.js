const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'tables', precio: 700},
    {nombre: 'audifonos', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'celular', precio: 500},
    {nombre: 'laptop', precio: 800}
];

//ForEach //mostrar algo en consola o mprimir algo en html
carrito.forEach(producto => console.log(producto)/*producto(.precio) las variables
    que estan dentro de los parentesis permiten 
    ver los datos que contienen estos*/
);



//map //crear un nuevo arreglo (filtrar)
//se debe asignar a una nueva variable
const arreglo2 = carrito.map(producto => console.log(producto)//producto(.precio) las variables

//const arreglo2 = carrito.map(producto => '${producto.nombre} - ${producto.precio});
// console.log(arreglo2)