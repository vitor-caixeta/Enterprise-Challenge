document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitBtn = document.getElementById('submitBtn');

    // Função para validar a senha
    function isValidPassword(password) {
        // Verifica se a senha tem pelo menos 8 caracteres
        if (password.length < 8) return false;

        // Verifica se contém pelo menos uma letra maiúscula
        if (!/[A-Z]/.test(password)) return false;

        // Verifica se contém pelo menos um número
        if (!/\d/.test(password)) return false;

        // Verifica se contém pelo menos um caractere especial
        if (!/[@$!%*?&]/.test(password)) return false;

        return true; // Senha válida
    }

    // Função para validar entradas e habilitar o botão
    function checkInputs() {
        const isNameValid = nameInput.value.trim() !== '';
        const isEmailValid = emailInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.trim() !== '';
        const isConfirmPasswordValid = confirmPasswordInput.value.trim() !== '';
        submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
    }

    // Adiciona listeners para validar os campos conforme o usuário digita
    nameInput.addEventListener('input', checkInputs);
    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
    confirmPasswordInput.addEventListener('input', checkInputs);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validação da senha
        if (!isValidPassword(password)) {
            alert('A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.');
            return;
        }

        // Validação de confirmação de senha
        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
            return;
        }

        // Armazenar o nome no localStorage
        localStorage.setItem('clientName', name);

        // Redirecionar para a página home.html
        window.location.href = './home.html';
    });
});
