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
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const profileLink = document.getElementById('profileLink');

    // Funcionalidade do botão de voltar
    backButton.addEventListener('click', (event) => {
        event.preventDefault();  
        window.history.back();
    });

    
// Gravador 

const microphoneButton = document.getElementById('microphone-button');
const searchInput = document.getElementById('search-input');
let recognition;
let isRecognizing = false; // Variável para controlar o estado do reconhecimento

// Verifica se o navegador suporta a Web Speech API
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false; // Não grava continuamente
    recognition.interimResults = false; // Não mostra resultados intermediários
    recognition.lang = 'pt-BR'; // Define o idioma para português do Brasil

    recognition.onstart = function() {
        console.log('Gravação iniciada...');
        isRecognizing = true; // Marca que o reconhecimento está em andamento
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript; // Captura o texto reconhecido
        searchInput.value = transcript; // Preenche o input com o texto
        console.log('Texto reconhecido: ' + transcript);
    };

    recognition.onerror = function(event) {
        console.error('Erro no reconhecimento: ' + event.error);
    };

    recognition.onend = function() {
        console.log('Gravação encerrada.');
        isRecognizing = false; // Marca que o reconhecimento foi encerrado
    };

    microphoneButton.addEventListener('click', function() {
        console.log('Botão de microfone clicado.');
        if (!isRecognizing) { // Verifica se não está reconhecendo
            recognition.start(); // Inicia a gravação
        } else {
            console.log('Reconhecimento já está em andamento.'); // Mensagem de aviso
        }
    });
} else {
    console.error('Web Speech API não é suportada neste navegador.');
    microphoneButton.disabled = true; // Desabilita o botão se a API não for suportada
}
});