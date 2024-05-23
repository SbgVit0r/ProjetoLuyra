var botaoBuscar = document.querySelector("#buscar-encomendas");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        
        var encomendas = JSON.parse(resposta);
        
        encomendas.forEach(function(encomenda){
            addEncomenda(encomenda)
        })
    });
    xhr.send();
})