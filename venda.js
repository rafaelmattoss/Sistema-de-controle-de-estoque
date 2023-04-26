var paginaVendas = document.querySelector("#pagina-vendas");
paginaVendas.style.display = "none";

var botaoVendas = document.querySelector("#venderr");
botaoVendas.addEventListener("click", function(){

    
    if(paginaVendas.style.display === "none"){
        paginaVendas.style.display = "block";
        botaoVendas.textContent = "X"
    } else {
        paginaVendas.style.display = "none";
        botaoVendas.textContent = "VENDAS"
    }
});

var botaoTotal = document.querySelector("#itotal");
var qtdRetirada = (document.querySelector("#dvendas").value);
var valorRetirada = document.querySelector("#dpreco").value;
botaoTotal.textContent = qtdRetirada * valorRetirada + "R$";

var botaoVender = document.querySelector("#vender");
var botaoTotal = document.querySelector("#itotal");
var inputPreco = document.querySelector("#dpreco");

inputPreco.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter
    event.preventDefault(); // Previne que o formulário seja enviado
    atualizarTotal();
  }
});

function atualizarTotal() {
  var codigoProduto = document.querySelector("#dproduto").value;
  var qtdRetirada = parseInt(document.querySelector("#dvendas").value);
  var valorRetirada = parseFloat(document.querySelector("#dpreco").value);

  botaoTotal.textContent = (qtdRetirada * valorRetirada).toFixed(2) + " R$";
}



botaoVender.addEventListener("click", function(){

    var codigoProduto = document.querySelector("#dproduto").value;
    var qtdRetirada = (document.querySelector("#dvendas").value);
    var valorRetirada = document.querySelector("#dpreco").value;

    var produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto) {
        var tdcodigo = produto.querySelector(".info-codigo");
        var codigo = tdcodigo.textContent;
        var tdquantidade = produto.querySelector(".info-quantidade");
        var quantidade = parseInt(tdquantidade.textContent);
        var erros = document.querySelector("#erros")
        botaoTotal.textContent = qtdRetirada * valorRetirada + "R$"

        if (codigo === codigoProduto) {
            if (quantidade >= qtdRetirada) {
                quantidade -= qtdRetirada;
                tdquantidade.textContent = quantidade;
                erros.textContent = "Quantidade Retirada Com Sucesso"
                erros.classList.add("mostrar");
                setTimeout(function() {
                    erros.classList.remove("mostrar");
                  }, 2000);
                
            } else {
                erros.textContent = "Quantidade Insuficiente"
                erros.classList.add("mostrar");
                setTimeout(function() {
                    erros.classList.remove("mostrar");
                  }, 2000);
                
            }

        }

        var tdsQuantidade = document.querySelectorAll(".info-quantidade");

        tdsQuantidade.forEach(function(td) {
        var quantidade = parseInt(td.textContent);

        if (quantidade < 10) {
            td.style.backgroundColor = "red";
            var aviso = document.querySelector("#aviso-estoque-baixo");
            aviso.style.display = "block";
            setTimeout(function() {
                aviso.style.display = "none";
              }, 2000);
            
        }else{
            tdquantidade.style.backgroundColor = "";
        }
    });

    });

    document.querySelector("#dproduto").value=''
    document.querySelector("#dvendas").value =''
    document.querySelector("#dpreco").value = ''
    botaoTotal.textContent = "";

    

});

setTimeout(function() {
  erros.classList.remove("mostrar");
}, 1000);
