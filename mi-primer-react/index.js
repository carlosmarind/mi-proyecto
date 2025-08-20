import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

//const boton = React.createElement('tipo_elemento','objeto_atributos','arreglo_children');
const boton = React.createElement('button', { name: "mi-boton", className: "aceptar" }, "aceptar");
const boton2 = React.createElement('button', { name: "mi-boton2", className: "cancelar" }, "cancelar");
const boton3 = React.createElement('button', { name: "mi-boton3", className: "otro" }, "otro");

let contenedor = React.createElement(React.Fragment, null, [boton, boton2, boton3]);

root.render(contenedor);


