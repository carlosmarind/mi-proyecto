import React from "https://esm.sh/react@18.2.0";
const Header = () => {
    return React.createElement("header", null,
        React.createElement("h1", null, "Bienvenido a Mi Sitio Web"),
        React.createElement("p", { className: "subtitle" }, "Una página de ejemplo creada con HTML y CSS")
    )
}

export { Header };