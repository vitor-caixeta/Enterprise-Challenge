// Adicione um listener para o botão para passar o nome
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('clientName', name);
    window.location.href = 'pages/vitor/testevocacional.html';
});