const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const alertaDiv = document.getElementById('alerta');

const usuario = { email: 'rolling@movies', pass: 'rolling', nombre: 'Rolling' };

formularioForm.onsubmit = function (event) {
    event.preventDefault();
    const coincideEmail = usuario.email === emailInput.value;
    const coincidePass = usuario.pass === passInput.value;

    if (coincideEmail && coincidePass) {
        alert(`Hola ${usuario.nombre}.`);
        alertaDiv.classList.add('d-none');
        window.location.href = '../html/vistaAdministrador.html';
    } else {
        // alertaDiv.style = "display: block !important"
        alertaDiv.classList.remove('d-none');
    }
};
