//this 
//va a hacer referencia a las propiedades del objeto sobre el cual se esta mandando a llamar


const reservacion = {
    nombre: 'liz',
    apellido: 'em',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log('el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}');
    }
}

const reservacion2 = {
    nombre: 'liz',
    apellido: 'em',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log('el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}');
    }
}

reservacion.informacion();
reservacion2.informacion();