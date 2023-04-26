
var campoFiltro = document.querySelector("#filtre-produtos")

var fcodigo = document.querySelector("#codigoo")
var fdescricao = document.querySelector("#descricaoo")


fcodigo.addEventListener("click", filtraPorCodigo);

fdescricao.addEventListener("click", filtrarPorDescricao);




function filtraPorCodigo (){

  campoFiltro.addEventListener("input", function(){
    var produtos = document.querySelectorAll(".produto ")

    if(campoFiltro.value.length > 0){

      for( var u = 0; u < produtos.length; u++){

       var produto = produtos[u]
       var tdCodigo = produto.querySelector(".info-codigo")
       var codigo = tdCodigo.textContent
       var acharCodigo = new RegExp(campoFiltro.value, "i")

       if(!acharCodigo.test(codigo)){
           produto.classList.add("invisivel")
       } else{
           produto.classList.remove("invisivel")
       }

      }
   
    } 

})

}

function filtrarPorDescricao(){

  campoFiltro.addEventListener("input", function(){
    
  var produtos = document.querySelectorAll(".produto")
   
   if(campoFiltro.value.length > 0){

    for( var u = 0; u < produtos.length; u++){

     var produto = produtos[u]
     var tdDescricao = produto.querySelector(".info-descrição")
     var descricao = tdDescricao.textContent
     var acharDescricao = new RegExp(campoFiltro.value, "i")

     if(!acharDescricao.test(descricao)){
         produto.classList.add("invisivel")
     } else{
         produto.classList.remove("invisivel")
     }

    }
 
  } else{
    for (var i = 0; i < produtos.length; i++) {
      var produto = produtos[i]
      produto.classList.remove("invisivel")
    }
  }

  })
  
}
   




