
import { conexionAPI } from "./conexionAPI.js";
import mostrarProductos from "./mostrarProductos.js";

export async function agregarMetodoEliminarProductos(){
    const botonesEliminar =  document.querySelectorAll("[boton-eliminar]");
    console.log(botonesEliminar)
    botonesEliminar.forEach(button => {
        button.addEventListener("click",async (element)=> {
            const contenedor = element.target.closest(".producto-item");
            await conexionAPI.eliminarProducto(contenedor.id);
            await mostrarProductos();
        });
    });
}

