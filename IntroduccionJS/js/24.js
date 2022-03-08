//switch
const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
        default:
            console.log('aun no has pagado');
        break;
}