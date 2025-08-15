document.addEventListener('DOMContentLoaded', (event) => {

    document
        .getElementById("formulario-registro")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellidos = document.getElementById("apellidos").value.trim();
            const edad = document.getElementById("edad").value;
            const nacimiento = document.getElementById("nacimiento").value;
            const pais = document.getElementById("pais").value.trim();
            const region = document.getElementById("region").value.trim();
            const dirCalle = document.getElementById("dir-calle").value.trim();
            const dirNumero = document.getElementById("dir-numero").value.trim();
            const sexo = document.querySelector('input[name="sexo"]:checked').value;
            const condiciones = document.getElementById("condiciones").checked;
            const informacion = document.getElementById("informacion").checked;

            let formulario = {
                nombre,
                apellidos,
                edad,
                nacimiento,
                pais,
                region,
                direccion: {
                    calle: dirCalle,
                    numero: dirNumero
                },
                sexo,
                condiciones,
                informacion,
            }

            let erroresEnFormulario = false;
            // primera validacion 
            if (validarCampo("nombre", formulario.nombre)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("apellidos", formulario.apellidos)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("edad", formulario.edad)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("nacimiento", formulario.nacimiento)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("pais", formulario.pais)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("region", formulario.region)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("dir-calle", formulario.direccion.calle)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("dir-numero", formulario.direccion.numero)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("sexo", formulario.sexo)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("condiciones", formulario.condiciones)) {
                erroresEnFormulario = true;
            }
            if (validarCampo("informacion", formulario.informacion)) {
                erroresEnFormulario = true;
            }

            if (!erroresEnFormulario) {
                console.log('haciendo submit del formulario');
                console.log(formulario);
                return;
            }

            console.log('Formulario se encuentra con errores');
        });

    document.querySelectorAll(".form-input").forEach(function (elemento) {
        elemento.addEventListener("change", function (event) {
            console.log(`cambio ${event.currentTarget.name}`);
            let name = event.currentTarget.name;
            document.querySelector(`.error.${name}`).classList.add('hidden')
            document.querySelector(`.error.${name}`).innerHTML = ''
        });
    });
});

let reglasValidacion = {
    nombre: {
        required: true,
        minLength: 2,
        maxLength: 20,
        message: {
            required: 'El nombre es obligatorio',
            minLength: 'El nombre debe tener al menos 2 caracteres',
            maxLength: 'El nombre no puede tener mas de 16 caracteres'
        }
    },
    edad: {
        required: true,
        min: 18,
        max: 100,
        message: {
            required: 'La edad es obligatoria',
            min: 'Debes ser mayor de 18 años',
            max: 'Edad no válida'
        }
    },

}

//retorna falso si no hay errores, y verdadero si hay errores.
function validarCampo(nombreCampo, valor) {

    // nombreCampo -> "nombre"
    // nombreCampo -> ""
    // .${nombreCampo} = .nombre
    // `.${nombreCampo}.error` = .nombre.error
    let errores = revisarReglas(nombreCampo, valor)

    if (errores) {
        elementoError = document.querySelector(`.${nombreCampo}.error`);
        elementoError.innerHTML = ''
        elementoError.classList.remove("hidden");
        lista = document.createElement("ul");
        errores.forEach(error => {
            item = document.createElement("li");
            item.textContent = error;
            lista.appendChild(item);
        });
        elementoError.appendChild(lista);
    }
    return (errores && errores.length > 0);
}

function revisarReglas(nombreCampo, valor) {

    //  nombreCampo -> "edad"
    // valor -> = "" -> "23"

    const reglas = reglasValidacion[nombreCampo];

    const errores = [];

    if (!reglas) return [];

    if (reglas.required && (!valor || valor.trim() === '')) {
        errores.push(reglas.message.required)
        return errores
    }

    if (!valor || valor.trim() === '') {
        return [];
    }

    if (reglas.minLength && valor.length < reglas.minLength) {
        errores.push(reglas.message.minLength)
    }
    if (reglas.maxLength && valor.length > reglas.maxLength) {
        errores.push(reglas.message.maxLength)
    }
    if (reglas.min && parseInt(valor) < reglas.min) {
        errores.push(reglas.message.min)
    }
    if (reglas.max && parseInt(valor) > reglas.max) {
        errores.push(reglas.message.max)
    }
    return errores;
}