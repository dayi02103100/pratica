//string o cadena de texto
const producto = "Monitor de 20 pulgadas";
const producto4 = "Monitor de \"20 pulgadas\""; /*la diagonal invertida
 "\" se tuliza para habilitar las comillas dentro de otras*/
const producto2 = String('monitor de 30 pulgadas');
const producto3 = new String('monitor de 50 pulgadas');

console.log(producto)
/*console.log(typeof producto) con typeof se puede saber que 
tipo de dato tiene una varible*/
console.log(producto2)
console.log(producto3)
console.log(producto4)