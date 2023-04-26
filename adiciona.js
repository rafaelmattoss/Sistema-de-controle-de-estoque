var botaoAdicionar = document.querySelector("#adicionar-produto")


botaoAdicionar.addEventListener("click", function(){

    var form = document.querySelector("#form-adiciona")

    var produto = obterProduto(form)
    
    var erros = validaProduto(produto);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaProdutoNaTabela(produto);
    form.reset();
    
   

})

function adicionaProdutoNaTabela (produto){
    var produtoTr = montaTr(produto)
    var tabela= document.querySelector("#tabela-produtos")
    tabela.appendChild(produtoTr)
    
}


function obterProduto(form){
    var produto ={
        descricao: form.descricao.value,
        tamanho: form.tamanho.value,
        cor: form.cor.value,
        quantidade: form.quantidade.value,
        codigo: form.codigo.value,
        preco: form.preco.value
    }

    return produto
}


function validaProduto(produto){
    var erros = [];
 
    if(produto.descricao === ''){
     erros.push("A descrição não pode estar em branco");
    }
 
    if(produto.tamanho === ''){
     erros.push("O tamanho não pode estar em branco");
    }
 
    if(produto.cor === ''){
     erros.push("A cor não pode estar em branco");
    }
 
    if(produto.quantidade === ''){
     erros.push("A quantidade não pode estar em branco");
    }
 
    return erros;
 }
 


function exibeMensagensDeErro(erros){
 
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";

    erros.forEach(function(erro) {

        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
        
    });

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function montaTr(produto){
    var produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto")

    produtoTr.appendChild(montaTd(produto.descricao, "info-descricao"))
    produtoTr.appendChild(montaTd(produto.tamanho, "info-tamanho"))
    produtoTr.appendChild(montaTd(produto.cor, "info-cor"))
    produtoTr.appendChild(montaTd(produto.quantidade, "info-quantidade"))
    produtoTr.appendChild(montaTd(produto.codigo, "info-codigo"))
    produtoTr.appendChild(montaTd(produto.preco, "info-preco"))

    return produtoTr

}