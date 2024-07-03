import {conexionAPI} from './conexionAPI.js';

const productos = await conexionAPI.traerProductos();
console.log(productos);