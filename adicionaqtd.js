var botaoQtd = document.querySelector("#adicionar-quantidade");
var filtro = document.querySelector("#codigoqtd");
var produtos = document.querySelector("#tabela-produtos");
var formAdiciona = document.querySelector("#form-adiciona");

botaoQtd.addEventListener("click", function(){
    var quantidadeNova = document.querySelector("#qtd").value;
    var codigoQtd = filtro.value;
    var totalQuantidade;

    var linhas = produtos.querySelectorAll(".produto");
    linhas.forEach(function(linha) {
        var tdCodigo = linha.querySelector(".info-codigo");
        var tdQuantidade = linha.querySelector(".info-quantidade");
        var codigo = tdCodigo.textContent;

        

        if (codigo === codigoQtd) {
            var quantidadeAtual = parseInt(tdQuantidade.textContent);
            totalQuantidade = quantidadeAtual + parseInt(quantidadeNova);
            tdQuantidade.textContent = totalQuantidade;
        }

        if (totalQuantidade > 10) {
            var tdsQuantidade = document.querySelectorAll(".info-quantidade");
            tdsQuantidade.forEach(function(td) {
                var quantidade = parseInt(td.textContent);
                if (quantidade > 10) {
                    td.style.backgroundColor = "";
                }
            });
        }
        
    });

    document.querySelector("#qtd").value = "";
    filtro.value = "";
});

formAdiciona.addEventListener("submit", function(event){
    event.preventDefault();
    var codigo = document.querySelector("#codigo").value;
    var descricao = document.querySelector("#descricao").value;
    var quantidade = document.querySelector("#quantidade").value;

    var novaLinha = document.createElement("tr");
    novaLinha.classList.add("produto");
    novaLinha.innerHTML = `
        <td class="info-codigo">${codigo}</td>
        <td class="info-descricao">${descricao}</td>
        <td class="info-quantidade">${quantidade}</td>
    `;
    produtos.appendChild(novaLinha);

    document.querySelector("#codigo").value = "";
    document.querySelector("#descricao").value = "";
    document.querySelector("#quantidade").value = "";
});








