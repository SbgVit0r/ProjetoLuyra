var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");

    var cliente = document.querySelectorAll(".cliente");

    if(this.value.length > 0){

        for(var cli=0; cli < cliente.length; cli++){

            var nome = cliente[cli].querySelector(".info-nome").textContent;

            var expressao = new RegExp(this.value, "i");

            //if(nome != this.value){
            if(!expressao.test(nome)){
                cliente[cli].classList.add("invisivel");
            } else {
                cliente[cli].classList.remove("invisivel");
            }
        }

    } else {
        for (var cli = 0; cli < cliente.length; cli++) {
            clientes[cli].classList.remove("invisivel");
        }
    }
})