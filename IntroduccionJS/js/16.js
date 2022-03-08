//Array metodos

const meses = ['enero', 'febrero', 'marzo', 'abril','mayo']

const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'tables', precio: 700},
    {nombre: 'audifonos', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'celular', precio: 500},
    {nombre: 'laptop', precio: 800}
];

//foreach

meses.forEach(function(mes) {
    console.log(mes);
    
});

/*meses.forEach(function(mes) {
   if(mes == 'marzo'){ 
    console.log('marzo si existe');
   }
});*/

//includes
//const resultado = meses.include('marzo');
console.log(resultado);

//some ideal para arreglo de objetos
let resultado = meses.include('marzo');
resultado = carrito.some(function(producto){
    return producto.nombre === 'celular'
})

//.reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//filter
resultado = carrito.filter(function(producto){
    return producto.precio = 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre === 'celular'
   //negar return producto.nombre !== 'celular'

});
