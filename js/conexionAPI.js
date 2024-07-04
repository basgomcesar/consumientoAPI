async function traerProductos(){
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida =await conexion.json();
    return conexionConvertida;
}

async function crearNuevoProducto(titulo,precio,imagen_url){
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            precio: precio,
            imagen: imagen_url,
        })
    });
    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    return conexionConvertida;
}

async function eliminarProducto(idProducto){
    try{
        const conexion = await fetch(`http://localhost:3001/productos/${idProducto}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (conexion.ok) {
            alert("producto eliminado exitosamente ")
        } else {
            alert("Error al eliminar producto");
        }
    }catch(error){
        alert(error);
    }
}
export const conexionAPI = {
    traerProductos,
    crearNuevoProducto,
    eliminarProducto
}