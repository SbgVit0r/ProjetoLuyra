// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

// Passa por cada encomenda calculando o valor total
for (var count = 0; count < clientes.length; count++) {
    
    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtd").textContent;
    
    //Captura o valor unitário do produto
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    clientes[count].querySelector(".info-valor").textContent = formataValor(unitario);

    validador();

}

function formataValor(valor){
    valor = parseFloat(valor)
    return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
}

function calculaTotal(qtde, unitario){
    var total = 0;
    total = formataValor(qtde*unitario);
    return total;
}   

function validador(){
    // Valida a quantidade
    if(qtde < 1 || isNaN(qtde)){
        //Quantidade NOK, avisa o usuario.
        clientes[count].querySelector(".info-qtd").textContent = "QTDE INVALIDA!"
        clientes[count].querySelector(".info-qtd").style.color="red"
    }else if (unitario < 30 || isNaN(unitario)){
        clientes[count].querySelector(".info-qtd").textContent = "VALOR INVALIDO!"
        clientes[count].style.backgroundColor="red"      
    }else{
        clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);
    }
}





