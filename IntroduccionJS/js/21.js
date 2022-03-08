//metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log('pausando...')
    },
    crearPlaylist: function(nombre){
        console.log('creando la playlist: ${nombre}')
    },
    reproducirPlaylist: function(nombre){
        console.log('reproduciendo la playlist: ${nombre}')
    }
//propiedades fuera del  objeto seria con =

}
//propiedades dentro delobjeto es con : 
reproductor.borrarCancion = function(id){
    console.log('eliminando la cancion: ${id}')
}

reproductor.reproducir(3840);//reproducir es una funcion
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock');