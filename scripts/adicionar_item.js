
var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

    // Captura o formulário da pagina
    var form = document.querySelector("#form-adiciona");

    // Captura os dados da nova encomenda
    var encomenda = obtemEncomenda(form);

    // Valida os dados da nova encomenda
    var validacao = validaEncomenda(encomenda)

    // Valida se a encomenda pode ser inserida
    if(validacao.length > 0){
        // Erro nos dados da encomenda, informa o usuário
        exibeMensagensErro(validacao);
        return;
    } else {
        // Insere a nova encomenda na tabela 
        addEncomenda(encomenda);

        //Limpa o formulário
        form.reset();

        //Limpa a UL de erros
        document.querySelector("#mensagens-erro").innerHTML="";
    }
    
  
});


// Função para capturar os dados da nova encomenda
function obtemEncomenda(dadosForm){

    var encomenda = {
        cliente: dadosForm.cliente.value,
        produto: dadosForm.produto.value,
        qtd: dadosForm.qtd.value,
        valor: dadosForm.valor.value,
    }

    return encomenda;
}

// Função para adicionar a nova encomenda na tabela
function addEncomenda(novaEncomenda){
    /*
        1. Montar as TDs  - OK
        2. Criar uma TR - OK
        3. Colocar as Tds na TR - OK
        4. Colocar a TR na TABLE - OK
    */ 
    var tabela = document.querySelector("table");

    tabela.appendChild(montaTR(novaEncomenda));
}

// Monta uma coluna nova 
function montaTD(dado){

    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

// Monta uma nova TR
function montaTR(novaEncomenda){

    var tr = document.createElement("tr");

    tr.appendChild(montaTD(novaEncomenda.cliente));
    tr.appendChild(montaTD(novaEncomenda.produto));
    tr.appendChild(montaTD(novaEncomenda.qtd));
    tr.appendChild(montaTD(formataValor(novaEncomenda.valor)));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtd, novaEncomenda.valor)));
    return tr;
}

function validaEncomenda(encomenda){

    var erros = [];

    // Verifica se o nome foi informado
    if(encomenda.cliente==""){
        erros.push("O nome não pode ser vazio!")
    }

    // Verifica se a quantidade é maior que 0
    if(encomenda.qtd <= 0 || isNaN(encomenda.qtd)){
        erros.push("A Quantidade deve ser ser numérica e maior que 0")  
    }

    //Verifica se o valor unitário é maior que zero e um número
    if(encomenda.valor <= 0 || isNaN(encomenda.valor)){
        erros.push("O valor unitário deve ser numérico e maior que 0")
    }

    return erros;
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    // Limpa UL para exibir os erros
    ul.innerHTML = "";

    erros.forEach(function(msg){
        var li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    })
}

function removeEncomenda(){
  /*Descrição:

    Esta função adiciona um ouvinte de evento à tabela HTML especificada no documento. Quando o usuário realiza um duplo clique em qualquer célula da tabela, a linha correspondente à célula clicada é removida da tabela após uma breve animação de desaparecimento.

    Funcionamento:

    Identifica a tabela HTML no documento usando o seletor "table".
    Adiciona um ouvinte de evento ao elemento da tabela para capturar eventos de duplo clique.
    Quando um duplo clique é detectado em uma célula da tabela, a classe CSS fadeOut é adicionada ao elemento pai (a linha da tabela).
    Após um atraso de 1000 milissegundos (1 segundo) utilizando a função setTimeout, a linha da tabela é removida do DOM
    */

    var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 1000);
        
    })
     
}



removeEncomenda();