//Promises

const usuarioAutenticado = new Promise( (resolve, reject)=>{
    const auth = true;

    if(auth){
        resolve('usuario autenticado');//el promise se cumple

    }else{
        reject('no se pudo iniciar sesion');
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//en los promises existen 3 valores 
//pending: no se ha cumplido pero tampoco se ha rechazado
//fulfilled: ya se cumplio
//rejected: se ha rechazado o no se pudo cumplir