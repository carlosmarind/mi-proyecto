
document.addEventListener('DOMContentLoaded', (event) => {


    document.getElementById("formulario-registro")
        .addEventListener("submit", function (event) {
            console.log('haciendo submit del formulario');

            event.preventDefault();
            this.reset();
        });



});

