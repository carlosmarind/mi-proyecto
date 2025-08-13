
document.addEventListener('DOMContentLoaded', (event) => {


    document.getElementById("formulario-registro")
        .addEventListener("submit", function (event) {

            let error = false;

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
            if (!nombre) {
                console.log("error en el nombre")
                error = true;
            }

            event.preventDefault();
            if (!error) {
                this.reset();
            }

            console.log('haciendo submit del formulario');
            console.log(formulario);
        });



});

