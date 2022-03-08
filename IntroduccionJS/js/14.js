//unir dos objetos con el Spread Operator

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

const medidad ={
    peso:'1Kg',
    medida: '1m'
}

//Spread Operator 
const nuevoProducto = { ...producto,...medidad};

console.log(producto);
console.log(nuevoProducto);
