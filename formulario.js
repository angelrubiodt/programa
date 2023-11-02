
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const mensajeExito = document.getElementById('mensaje-exito');
const mensajeError = document.getElementById('mensaje-error');

function validarFormulario() {
  if (nombre.value === '' || email.value === '' || mensaje.value === '') {
    mensajeError.style.display = 'block';
    mensajeExito.style.display = 'none';
  } else {
    mensajeError.style.display = 'none';
    mensajeExito.style.display = 'block';
    formulario.reset(); 
  }
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  validarFormulario();
});
