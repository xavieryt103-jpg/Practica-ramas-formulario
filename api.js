async function enviarRegistro(nombre, correo) {
  try {
    const respuesta = await fetch('https://api-ejemplo.com/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nombre, correo: correo })
    });

    if (respuesta.ok) {
      console.log('Registro enviado correctamente');
    }
  } catch (error) {
    console.log('Error al conectar con la API:', error);
  }
}