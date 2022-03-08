//for loop
/*for(let i = 0; i < 10; i++){
    console.log(i);

}*/

/*for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log('el numero ${i} es par');

    }else{
        console.log('el numero ${i} es impar');
    }

}*/

const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'tables', precio: 700},
    {nombre: 'audifonos', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'celular', precio: 500},
    {nombre: 'laptop', precio: 800}
];


for(let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i.nombre]);
}


//while loop  //revisa si si de cumple positivamente y ejecuta solo si es correcto

/*let i = 0;//indice o valor inicial

while(i < 10){//condicion
    console.log(i);

    i++//incremento

}*/

/*while(i <= 100){//condicion
    if(i % 2 ===0){
        console.log('el numero ${i} es par')
    }else{
        console.log('el numero ${i} es impar')
    }
    i++//incremento

}*/
while(i <carrito.length){
    console.log(carrito[i].nombre)

    i++;
}

//do while loop //ejecuta aunque no se cumpla y luego y revisa

let i = 0;

do{
    console.log(i);

    i++
}while(i < 10){

}