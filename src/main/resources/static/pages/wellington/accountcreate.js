document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const submitButton = document.querySelector("button[type='submit']");

    // Validação da senha de acordo com os critérios
    function isValidPassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[@$!%*?&]/.test(password);
        const isLongEnough = password.length >= 8;

        return hasUpperCase && hasNumber && hasSpecialChar && isLongEnough;
    }

    // Verifica se as senhas são válidas
    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const isPasswordValid = isValidPassword(password);

        if (password !== confirmPassword || !isPasswordValid) {
            submitButton.disabled = true; 
        } else {
            submitButton.disabled = false; 
        }
    }

    // Verifica as senhas ao digitar
    passwordInput.addEventListener("input", validatePasswords);
    confirmPasswordInput.addEventListener("input", validatePasswords);

    // Lidar com o envio do formulário
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = passwordInput.value;
        const newsletter = document.getElementById("newsletter").checked;

        const data = {
            nome: name,  
            email: email,
            senha: password, 
            newsletter: newsletter
        };

        // Validação final antes de enviar
        if (password !== confirmPasswordInput.value) {
            alert("As senhas não correspondem.");
            return; 
        }
        if (!isValidPassword(password)) {
            alert("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.");
            return; 
        }

        try {
            const response = await fetch("/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
            } else {
                alert("Erro ao criar a conta. Tente novamente.");
            }
        } catch (error) {
            alert("Erro na comunicação com o servidor.");
            console.error(error);
        }
    });
});
