import mostrarProductos from './mostrarProductos.js';
import { agregarMetodoEliminarProductos } from './eliminarProducto.js';
import './crearProducto.js';
await mostrarProductos();
const videos = document.querySelectorAll("[boton-eliminar]");
console.log(videos);
await agregarMetodoEliminarProductos();