var tdsPreco = document.querySelectorAll(".info-preco");

tdsPreco.forEach(function(td) {
  td.addEventListener("dblclick", function() {
    var linha = this.parentNode;
    linha.classList.add("animated");
    setTimeout(function(){
        linha.remove();
    }, 1000);  
  });
});




  
