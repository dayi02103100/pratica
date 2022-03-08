//Arrow Functions
//el fuction de sustituye por =>
const sumar2 = (n1, n2)=>{//parametros dentro de los parentesis
    console.log(n1 + n2);
}
//tambien funciona en esa forma
//const sumar2 = (n1, n2)=> console.log(n1 + n2);


const aprendiendo= (tecnologia) => {
    console.log('Aprendiendo ${tecnologia}')

}

aprendiendo('javaScript')
sumar2(5, 10);


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

meses.forEach(mes => {
    console.log(mes);
    
});



let resultado;

resultado = carrito.some(producto => producto.nombre === 'celular')

//.reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

//filter
resultado = carrito.filter(producto => producto.precio = 400);

resultado = carrito.filter(producto => producto.nombre === 'celular');
//negar return producto.nombre !== 'celular'

console.log(resultado);

