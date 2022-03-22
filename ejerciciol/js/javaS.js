document.addEventListener('keyup', e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".p-nombre,.producto").forEach(nombre =>{
            nombre.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro")
        })

    }


})