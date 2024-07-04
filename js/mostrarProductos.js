import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

//crear card
function crearCard(nombre,precio,imagen_url,idProducto){
    const elementoCard = document.createElement('li');
    elementoCard.classList.add('producto-item');
    elementoCard.id =idProducto;
    elementoCard.innerHTML = `
                <img
                  class="imagen-producto"
                  src="${imagen_url}"
                  alt="${nombre}"
                />
                <p>${nombre}</p>
                <div class="precio-eliminar-contenedor">
                  <p>$ ${precio}</p>
                  <img
                    class="icono-eliminar"
                    src="/img/eliminarImagen.svg"
                    alt="Icono elimiar producto"
                    boton-eliminar
                  />
                </div>
    `;
    return elementoCard;
}

//agregar carda a lista
export default async function mostrarProductos(){
  lista.innerHTML ='';
    try{
    const videos = await conexionAPI.traerProductos();
    if(videos.length < 1){
      lista.innerHTML = `<span>No se han encontrado productos </span>`;
    }else{
      videos.forEach(producto => {
          let card = crearCard(producto.titulo,producto.precio, producto.imagen,producto.id);
          lista.appendChild(card);
      });
    }
  }catch(error){
    alert(error);
  }
}


//llamar a metodo para mostrar 