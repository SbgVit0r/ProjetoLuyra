var botaoAdicionar = document.querySelector("#adicionar-encomenda");


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var linha = document.createElement("tr");
    var coluna = document.createElement("td");
    var coluna2 = document.createElement("td");
    var coluna3 = document.createElement("td");
    var coluna4 = document.createElement("td");
    var coluna5 = document.createElement("td");
    var nome =  document.querySelector("#nome").value;
    var produto  = document.querySelector("#produto").value;
    var qtde = document.querySelector("#qtd").value;
    var preco = parseFloat(document.querySelector("#valor").value);
    var total = calculaTotal(preco, qtde)

    coluna.textContent = nome;
    coluna2.textContent = produto;
    coluna3.textContent = qtde;
    coluna4.textContent = formataValor(preco);
    coluna5.textContent = total;

    linha.appendChild(coluna);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    linha.appendChild(coluna4);
    linha.appendChild(coluna5);

    document.querySelector("table").appendChild(linha);
});

