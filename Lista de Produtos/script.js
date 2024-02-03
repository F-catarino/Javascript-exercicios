const produtos = [
    { nome: "Whey Protein", categoria: "Nutrition", preço: "30 €" },
    { nome: "Cat Food", categoria: "Pets", preço: "25 €" },
    { nome: "TV", categoria: "Technology", preço: "700 €" },
    { nome: "Gaming PC", categoria: "Technology", preço: "1500 €" },
    { nome: "Mountain Bike", categoria: "Sports", preço: "450 €" },
]

let produtoTabela = document.getElementById("produtoLista")

for (i = 0; i < produtos.length; i++) {
    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosPreço = document.createElement('td');
    produtoTabelaDadosPreço.innerHTML = produtos[i].preço;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreço);
    produtoTabela.appendChild(produtoTabelaLinha)


}






