document.querySelector('#buscador').addEventListener('click', traerDatos());
document.addEventListener('keyup', e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".producto").forEach(nombre =>{
            nombre.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro")
        })

    }


})
function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'archivo.json', true);
    
    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText); //verificacion de que leyera los datos en consola
            let datos = JSON.parse(this.responseText);//datos es el array de objetos
            //console.log(datos);
            let res = document.querySelector('#res');//selecciona la id res del index.html
            res.innerHTML +=' ';
           

            for(let objetos of datos){//realiza recorrido por cada uno de los items
                //console.log(objetos.pnombre);
                res.innerHTML += `
                        <div class="producto">
                            <img class="productoimagen" src=${objetos.productoimagen}>
                            <div class=informacion>
                                 ${objetos.pnombre}</br>
                                 ${objetos.pprecio}
                             </div>

                        </div>
                    `
                   
            }
            
            
        }
    }
}
      



//generar nuevo titulo
const nuevoTitulo = document.createElement('H1')

//agregar texto
nuevoTitulo.textContent = 'Flores medellin';

//agregar href
//nuevoTitulo.href = ''

//agregar clase
nuevoTitulo.classList.add('titulo');

//agragarlo al documento
const tituloProbando = document.querySelector('.tituloProbando')
tituloProbando.appendChild(nuevoTitulo);
console.log(nuevoTitulo);



