//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let textoAmigo = document.getElementById('amigo').value;
    if (validaEntradaDeTexto(textoAmigo)) {
        amigos.push(textoAmigo);
        limparCampo();
        atualizarListaDeAmigos();
    }
}

function sorteiaNome() {
    // pelo menos 2 amigos pro sorteio, né?
    if (amigos.length < 2) {
        alert("Insira pelo menos 2 nomes para o sorteio.");
        return;
    }

    let amigosEmbaralhados = [...amigos];
    amigosEmbaralhados.sort(() => Math.random() - 0.5);

    let resultado = {};
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let amigoSorteado = amigosEmbaralhados[(i + 1) % amigos.length];
        resultado[amigo] = amigoSorteado;
    }

    console.log("Resultado do sorteio:", resultado);
    
    sorteiaAmigoAleatorio();
}

function sorteiaAmigoAleatorio() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo secreto sorteado é: ${amigoSorteado}`;
}

function validaEntradaDeTexto(textoAmigo) {
    if (textoAmigo === null) {
        alert("Por favor, insira um nome.");
        return false;
    }
    return true;
}

function botaoAdicionarNome() {
    adicionarAmigo();
}

function limparCampo() {
    document.getElementById('amigo').value = "";
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpar a lista existente

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// botao Adicionar amigos
document.getElementById('botaoAdicionar').addEventListener('click', botaoAdicionarNome);

// botão Sortear Nome
document.getElementById('botaoSortear').addEventListener('click', sorteiaNome);

