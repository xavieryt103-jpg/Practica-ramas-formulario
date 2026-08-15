document.getElementById('formularioRegistro').addEventListener('submit', function (e) {
  e.preventDefault();

  var nombre = document.getElementById('nombre').value.trim();
  var correo = document.getElementById('correo').value.trim();
  var mensaje = document.getElementById('mensaje');

  if (nombre === '' || correo === '') {
    mensaje.textContent = 'Todos los campos son obligatorios.';
    mensaje.style.color = 'red';
    return;
  }

  mensaje.textContent = 'Campos validados correctamente.';
  mensaje.style.color = 'green';
});