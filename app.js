//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const resultadoSorteio = document.getElementById("resultado");
    
    let nomes = [];

    window.adicionarAmigo = function () {
        const nome = inputNome.value.trim();
        
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    };

    window.sortearAmigo = function () {
        if (nomes.length === 0) {
            alert("A lista está vazia! Adicione nomes antes de sortear.");
            return;
        }
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        resultadoSorteio.innerHTML = `<li>Nome sorteado: ${nomes[indiceSorteado]}</li>`;
    };

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});
