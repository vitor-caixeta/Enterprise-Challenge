// Navbar principal 
document.addEventListener('DOMContentLoaded', function () {
    // Para o collapse da navbar em telas menores
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        var navbarCollapse = document.getElementById('navbarNavDropdown');
        navbarCollapse.classList.toggle('show');
    });
});

// navbar da pagina 

   // Função para carregar a imagem
   document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('profileImage');
            imgElement.src = e.target.result; 
            console.log("Imagem carregada: ", e.target.result); 
        };
        reader.readAsDataURL(file); 
        console.log("Arquivo selecionado: ", file.name); 
    }
});

// Função para sair
document.getElementById('logoutBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const confirmation = confirm("Você tem certeza que deseja sair?");
    if (confirmation) {
        console.log("Usuário saiu"); 
    }
});

// Form 
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulário enviado"); 

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const genero = document.getElementById('genero').value;
    const nascimento = document.getElementById('nascimento').value;
    const bio = document.getElementById('bio').value;

    // Log dos valores capturados
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
    console.log("Gênero:", genero);
    console.log("Data de Nascimento:", nascimento);
    console.log("Bio:", bio);

// Simula o salvamento dos dados
console.log("Dados salvos com sucesso!");
});