// recuperando o body 
const body = document.querySelector('body');
console.log(body);

// cancelar evento de submit 
document.querySelector ('form').addEventListener('submit', function(e){
e.preventDefault();

const campos = [
document.querySelector('#categoria'),
document.querySelector ('#tipodetrabalho'),
document.querySelector ('#localizacao'),
document.querySelector('#salario')
];
console.log (campos);
});


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

    backButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        // Volta para a página anterior no histórico do navegador
        window.history.back();
    });
});


// Categoria 

const selectCategoria = document.getElementById('categoria');

// Função para atualizar a profissão selecionada
const atualizarProfissao = () => {
    const profissaoIndex = selectCategoria.value; 
    console.log("Índice da profissão selecionada:", profissaoIndex);

    const profissaoTexto = selectCategoria.options[selectCategoria.selectedIndex].text; 
    console.log("Texto da profissão selecionada:", profissaoTexto);
};

// Evento para atualizar a profissão selecionada quando o usuário mudar a seleção
selectCategoria.addEventListener('change', () => {
    console.log("Usuário alterou a profissão selecionada.");
    atualizarProfissao(); 
});

// Inicializa a profissão com a primeira opção selecionada (caso o usuário não interaja)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada - inicializando com a primeira profissão.");
    atualizarProfissao();  
});



// Tipo de Trabalho 

// Seleciona os checkboxes pelo ID
const checkboxPresencial = document.getElementById('btn-check');
const checkboxHibrido = document.getElementById('btn-check-2');
const checkboxHomeOffice = document.getElementById('btn-check-3');

// Função para verificar quais checkboxes estão selecionados
const verificarSelecao = () => {
    const selecionados = [];

    // Verifica se cada checkbox está marcado e adiciona o texto correspondente
    if (checkboxPresencial.checked) {
        selecionados.push("Presencial");
    }
    if (checkboxHibrido.checked) {
        selecionados.push("Híbrido");
    }
    if (checkboxHomeOffice.checked) {
        selecionados.push("Home-office");
    }

    // Exibe no console as opções selecionadas
    console.log("Opções selecionadas:", selecionados.length > 0 ? selecionados.join(', ') : "Nenhuma");
};

// Adiciona evento de clique para cada checkbox
checkboxPresencial.addEventListener('change', verificarSelecao);
checkboxHibrido.addEventListener('change', verificarSelecao);
checkboxHomeOffice.addEventListener('change', verificarSelecao);

// Inicializa o status dos checkboxes quando a página carrega
document.addEventListener('DOMContentLoaded', verificarSelecao);



// Localização 

// Seleciona o dropdown de cidades
const selectLocalizacao = document.getElementById('localizacao');

// Função para lidar com a mudança na seleção
const atualizarLocalizacao = () => {
    const cidadeSelecionada = selectLocalizacao.options[selectLocalizacao.selectedIndex].text;
    console.log("Cidade selecionada:", cidadeSelecionada);
};

// Evento que captura a mudança no dropdown
selectLocalizacao.addEventListener('change', () => {
    console.log("Usuário alterou a cidade selecionada.");
    atualizarLocalizacao();  // Chama a função de atualização ao selecionar uma cidade
});

// Inicializa o dropdown com a primeira cidade selecionada
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada - inicializando com a primeira cidade.");
    atualizarLocalizacao();  // Chama a função ao carregar a página
});



// Salário 

const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');

function updateValues() {
    minValue.textContent = `R$ ${parseInt(rangeMin.value).toLocaleString('pt-BR')},00`;
    maxValue.textContent = `R$ ${parseInt(rangeMax.value).toLocaleString('pt-BR')},00`;
}

// Adiciona event listeners para atualizar valores ao deslizar
rangeMin.addEventListener('input', updateValues);
rangeMax.addEventListener('input', updateValues);

// Chama a função uma vez para inicializar os valores
updateValues();



// Botão Buscar 

document.addEventListener('DOMContentLoaded', () => {
    const buscarBtn = document.getElementById('favoriteBtn');

    favoriteBtn.addEventListener('click', () => {
        console.log('Botão de buscar foi clicado.');
    });
});

