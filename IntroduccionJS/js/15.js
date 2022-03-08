//Arreglos o Arrays
//objetos con {}
//arreglos con []
const numeros = [10, 20, 30, 40, 50];

//contenido de un arreglo seria console.table()
console.log(numeros);

const meses = Array['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.log(meses);

const arreglo = ["Hola", true, 10, "si", null, {nombre: "liz", trabajo:"pct"},[1,2,3]];
console.log(arreglo);



//Acceder a los valores de un arreglo
console.log(numeros[3]);

//conocer la extension de un arreglo
console.log(meses.length);

////////////////////////////////////////

//Agregar al final del arreglo
numero[5] = 60;
numero[6] = 70;

//otra forma de agregar al final del arreglo
console.push(60);
console.push(70);
console.push(80, 90,100);

//agrega al inicio del arreglo
console.unshift(-10, -20, -30);

//elimina ultimo elemento del arreglo
meses.pop();

//elemina el primer elemento del arreglo
meses.shift()

//recorrer la posicion del arreglo a eliminar
meses.splice(2, 1);

//Rest Operator o Spread Operator
//agregar al final de mejor recomendacion
const nuevoArreglo = [...meses, 'junio'];

//agrega al principio
const nuevoArreglo = ['junio', ...meses];

console.log(nuevoArreglo);