import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import { Header } from './Header.js'
import { Footer } from './Footer.js'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)

const App = () => {
    return React.createElement("div", { className: "container" },
        Header()
        ,
        React.createElement("div", { className: "content" },
            React.createElement("main", { className: "main-content" },
                React.createElement("h2", null, "Contenido Principal"),
                React.createElement("p", null,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    React.createElement("span", { className: "highlight" }, "Ut enim ad minim veniam"),
                    ", quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ),
                React.createElement("p", null,
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ),
                React.createElement("h3", null, "Características Destacadas"),
                React.createElement("p", null,
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                ),
                React.createElement("div", { className: "card" },
                    React.createElement("h3", null, "Sección Especial"),
                    React.createElement("p", null,
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    )
                )
            ),
            React.createElement("aside", { className: "sidebar" },
                React.createElement("h3", null, "Información Adicional"),
                React.createElement("p", null,
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
                ),
                React.createElement("h3", null, "Lista de Elementos"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Primer elemento importante"),
                    React.createElement("li", null, "Segundo elemento relevante"),
                    React.createElement("li", null, "Tercer elemento destacado"),
                    React.createElement("li", null, "Cuarto elemento esencial")
                ),
                React.createElement("div", { className: "card" },
                    React.createElement("h3", null, "Dato Curioso"),
                    React.createElement("p", null,
                        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
                    )
                )
            )
        ),
        Footer(),
        Footer()

    )
}

/* codigo para elementos en react*/

/* fin codigo para elementos en react*/
root.render(React.createElement(App));