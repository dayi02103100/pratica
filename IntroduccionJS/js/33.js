//Async / Await


function descargarNuevosClientes(){
  return new Promise(resolve => {
    console.log('descargando....espere');

    setTimeout( () => {
      resolve('los clientes fueron descargados')

    }, 5000)
  })
}

function descargarUltimosPedidos(){
  return new Promise(resolve => {
    console.log('descargando pedidos....espere');

    setTimeout( () => {
      resolve('los pedidos fueron descargados')

    }, 3000)
  })
}


async function app() {
  /*try{
    const resultado = await descargarNuevosClientes();
    console.log(resultado);
  }catch(error){
    console.log(error);
  }*/

  try{
    const resultado = await Promise.all([descargarUltimosPedidos(), descargarUltimosPedidos()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  }catch (error){
    console.log(error);
  }
}
app();



//setTimeout / este cada un determinado tiempo manda el mensaje colocado 
/*setTimeout(function() {
  console.log('set timeaout......');
}, 1000)//1 seg*/

/*setInterval(function() {
  console.log('set timeaout......');
}, 1000)//1 seg*/ //setInterval este repite cada determinado tiempo el mensaje anterior
