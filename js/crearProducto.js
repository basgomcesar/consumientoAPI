import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen_url = document.querySelector("[data-imagen]").value;
    try{
        console.log("creando producto...")
        await conexionAPI.crearNuevoProducto(titulo,precio,imagen_url);
    }catch(error){
        alert(error);
    }
}


formulario.addEventListener("submit",(evento)=> crearProducto(evento));
