let cardContainer = document.querySelector(".card-container");
let inputBusca = document.querySelector("input");
let dados = [];

async function carregarDados() {
    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizarCards(dados);
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        cardContainer.innerHTML = "<p>Erro ao carregar os dados.</p>";
    }
}

async function iniciarBusca() {
    let termoBusca = inputBusca.value.toLowerCase().trim();
    
    if (termoBusca === "") {
        limparCards();
        renderizarCards(dados);
        return;
    }
    
    let resultados = dados.filter(dado => {
        return (
            dado.nome.toLowerCase().includes(termoBusca) ||
            dado.descricao.toLowerCase().includes(termoBusca) ||
            dado.ano.toString().includes(termoBusca)
        );
    });
    
    limparCards();
    
    if (resultados.length === 0) {
        cardContainer.innerHTML = `<p style="text-align: center; color: #9aa0a6; padding: 2rem;">O soulslike "${termoBusca}" não existe ou não está entre o top 20.</p>`;
    } else {
        renderizarCards(resultados);
    }
}

function limparCards() {
    cardContainer.innerHTML = "";
}

function renderizarCards(dados) {
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");

        let ratingClass = "rating-low";
        if (dado.nota >= 8) ratingClass = "rating-high";
        else if (dado.nota >= 6) ratingClass = "rating-medium";

        let steamLink = dado.links && dado.links.steam ? `<a href="${dado.links.steam}" target="_blank" class="store-link steam">Steam</a>` : "";
        let psnLink = dado.links && dado.links.psn ? `<a href="${dado.links.psn}" target="_blank" class="store-link psn">PSN</a>` : "";
        let xboxLink = dado.links && dado.links.xbox ? `<a href="${dado.links.xbox}" target="_blank" class="store-link xbox">Xbox</a>` : "";

        article.innerHTML = `
        <div class="card-header">
            <h2>${dado.nome}</h2>
            <div class="rating ${ratingClass}">${dado.nota.toFixed(1)}</div>
        </div>
        <p class="ano"><strong>Ano:</strong> ${dado.ano}</p>
        <p class="descricao"><strong>Descrição:</strong> ${dado.descricao}</p>
        <div class="store-links">${steamLink}${psnLink}${xboxLink}</div>
        `;

        cardContainer.appendChild(article);
    }
}

inputBusca.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

document.addEventListener("DOMContentLoaded", carregarDados);
