// Navbar principal 
document.addEventListener('DOMContentLoaded', function () {
    // Para o collapse da navbar em telas menores
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        var navbarCollapse = document.getElementById('navbarNavDropdown');
        navbarCollapse.classList.toggle('show');
    });
});

//   navbar da pagina 
  function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Login
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
  
    // Evento de clique no botão de login
    loginButton.addEventListener('click', function () {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Valida se os campos estão preenchidos
      if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Faz a requisição para validar o login (simulação de recuperação de dados do banco)
      fetch('https://seu-servidor.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Login válido - redirecionar o usuário
          alert('Login bem-sucedido! Redirecionando...');
          window.location.href = 'pages/wellington/home.html';
        } else {
          // Exibe uma mensagem de erro se as credenciais forem inválidas
          alert('Usuário ou senha inválidos.');
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
      });
    });
  });
  