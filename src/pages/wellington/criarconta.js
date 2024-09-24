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

// Formulário 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const newsletterCheckbox = document.getElementById('newsletter');
    const registerButton = document.getElementById('registerButton'); // Botão de registro ajustado

    // Função para validar o formulário
    function validateForm() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        console.log('Validando formulário...');

        if (!name || !email || !password || !confirmPassword) {
            console.warn('Um ou mais campos estão vazios.');
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        if (password !== confirmPassword) {
            console.warn('As senhas não coincidem.');
            alert('As senhas não coincidem.');
            return false;
        }

        console.log('Formulário válido.');
        return true;
    }

    // Evento de clique no botão de cadastro
    registerButton.addEventListener('click', function () {
        console.log('Botão de registro clicado.');

        if (!validateForm()) {
            console.log('Validação do formulário falhou. Cancelando o registro.');
            return;
        }

        const userData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim(),
            newsletter: newsletterCheckbox.checked
        };

        console.log('Dados do usuário a serem enviados:', userData);

        // Faz a requisição para a API de criação de conta
        fetch('https://seu-servidor.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            console.log('Resposta da API recebida:', response);
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos da API:', data);
            if (data.success) {
                alert('Conta criada com sucesso! Redirecionando para a página inicial...');
                console.log('Redirecionando para home.html...');
                window.location.href = 'home.html';
            } else {
                console.error('Erro ao criar a conta:', data.message);
                alert('Erro ao criar a conta: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Ocorreu um erro ao criar a conta. Tente novamente mais tarde.');
        });
    });
});
