// Seleciona o botão "Buscar Encomendas"
var botaoBuscar = document.querySelector("#buscar-encomendas");

// Adiciona um ouvinte de evento para o clique no botão
botaoBuscar.addEventListener("click", function() {
    // Função para transformar e renderizar os dados
    function renderData(data) {
        const tableBody = document.querySelector('table');

        data.forEach(item => {
            const total = formataValor(item.preco * item.quantidade);
            const row = `<tr>
                <td>${item.customerName}</td>
                <td>${item.produto}</td>
                <td>${item.quantidade}</td>
                <td>${formataValor(item.preco)}</td>
                <td>${total}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Função para buscar dados da FakeStoreAPI
    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Transformando dados
        const transformedData = products.map(produto => ({
            customerName: "Cliente", // FakeStoreAPI não fornece nomes de clientes
            produto: produto.title,
            quantidade: 1, // Quantidade padrão, ajustar conforme necessário
            preco: produto.price
        }));

        renderData(transformedData);
    }

    // Chama a função de buscar dados
    fetchData();
});