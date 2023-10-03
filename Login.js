function loadAvatar(event) {
    // ... (código para cargar el avatar)
  }
  
  const loginButton = document.getElementById('loginButton');
  const errorMessage = document.getElementById('errorMessage');
  
  loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes implementar la lógica de validación
    if (username === 'v' && password === '1') {
      errorMessage.textContent = '';
      ;
      
      // Redirigir a otra página después del inicio de sesión exitoso
      window.location.href = '/Tienda-Virtual-master/nosotros.html'; // Cambia 'pagina_destino.html' por la URL de la página a la que deseas redirigir.
    } else {
      errorMessage.textContent = 'Contraceña o Nombre incorrecto';
    }
  });
  