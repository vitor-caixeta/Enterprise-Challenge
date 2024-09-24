// Navbar principal 
document.addEventListener('DOMContentLoaded', function () {
    // Para o dropdown "Mais Opções"
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      var dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });

    // Para o collapse da navbar em telas menores
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
      var navbarCollapse = document.getElementById('navbarNavDropdown');
      navbarCollapse.classList.toggle('show');
    });
  });

// navbar da pagina 

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const profileLink = document.getElementById('profileLink');

    // Funcionalidade do botão de voltar
    backButton.addEventListener('click', (event) => {
        event.preventDefault();  // Evita o comportamento padrão do link

        // Volta para a página anterior no histórico do navegador
        window.history.back();
    });

    // Funcionalidade do link para o perfil da empresa
    document.getElementById('perfilambev').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
    
        // Exibe uma mensagem no console ao clicar no ícone
        console.log('O perfil da empresa não está disponível no projeto.');
    });    
});


// Botão de Favorito
const favoriteBtn = document.getElementById('favorite-btn');

favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});

// Botão de Aplicar 
document.getElementById('aplicarBtn').addEventListener('click', function() {
    // Ação a ser executada ao clicar no botão "Aplicar"
    console.log('Você se inscreveu com sucesso!'); 
});

