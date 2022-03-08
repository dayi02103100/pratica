//.length .indexOf .includes
const practica = "Monitor de 20";
//length se utiliza para saber cuantos caracteres hay en la cadena de texto
console.log(practica.length);

const practica2 = "Monitos HD";
//indexOf se utiliza para saber la posicion de un elemento en el string
/*cuando el numero es mayor a cero a sido encontrado y puede arrogar 
algun resultado al contrario si es -1 no arrojara ningun resultado*/
console.log(practica2.indexOf('HD'));
console.log(practica2.indexOf('2'));


//includes retorna true o false
console.log(practica2.includes('HD'));
console.log(practica2.includes('ttt'));