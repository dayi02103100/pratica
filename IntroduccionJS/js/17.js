//declaracion de la funcion

function sumar(){//crea funcion
    console.log(10 * 10);
}

sumar()//manda a llamar

//expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3)
}

sumar2();

//IIFE son funciones que se envican ellas mismas
(function() {
    consolge.log('esto ses una funcion')
})(); //se llama con el parentesis
