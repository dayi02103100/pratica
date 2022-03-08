//clases

class Producto{
    constructor(nombre, precio){//constructor es una funcion reservada
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `el producto ${this.nombre} tiene un precio de: $ ${this.precio}`;

    }
}


const producto2 = new Producto('Monitor curvo de 40', 800);
const producto3 = new Producto('laptop', 300);

class Libro extends producto{//extends hereda de
    constructor(nombre, precio, isbn){
        super(nombre, precio);//exite en la clase padre
        this.isbn = isbn;
    }
    formatearProducto(){
        return `el producto ${this.nombre} tiene un precio de: $ ${this.precio} y su isbn: ${this.isbn}`;
            //'${super.formatearProducto()} y su isbn es ${this.isbn}'; //el super.  añade lo mismo del que esta arriba
    }
}

const libro = new libro ('JavaScript', 120, '65465413546');

console.log(libro.formatearProducto);
console.log(producto2.formatearProducto);
