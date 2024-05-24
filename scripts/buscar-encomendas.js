var botaoBuscar = document.querySelector("#buscar-encomendas");
var nomeCliente = document.querySelector(".info-nome");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakestoreapi.com/products");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        
        var encomendas = JSON.parse(resposta);
        
        encomendas.forEach(function(encomenda){
            if(!clienteExiste()){
                addEncomenda(encomenda);
            } 
        })

    });
    xhr.send();
})

function clienteExiste(){

    
}