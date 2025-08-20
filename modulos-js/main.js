import load from 'https://cdn.jsdelivr.net/npm/lodash-es/lodash.js'
import { max } from './calcular.js'

let listaNumeros = [1, 4, 6, 8, 4, 3, 6, 7, 8, 31, 99];


let valor = max(listaNumeros);

console.log("maximo desde import: ", valor);
console.log("--------");
console.log("Maximo: ", load.max(listaNumeros))
console.log("Minimo: ", load.min(listaNumeros))
console.log("Suma: ", load.sum(listaNumeros))
