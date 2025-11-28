// Carrega JSON e processa o ID
async function carregarDados() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const box = document.getElementById("resultado");

    if (!id) {
        box.innerHTML = "<p>Nenhum ID fornecido.</p>";
        return;
    }

    try {
        const resposta = await fetch("membros.json");
        const dados = await resposta.json();

        if (!dados[id]) {
            box.innerHTML = `<h3>ID não encontrado</h3><p>ID: ${id}</p>`;
            return;
        }

        const membro = dados[id];

        box.innerHTML = `
            <img src="${membro.foto || "https://via.placeholder.com/120"}">
            <h2>${membro.nome}</h2>
            <p><strong>Função:</strong> ${membro.funcao}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p class="status-${membro.estado.toLowerCase()}">
                Estado: ${membro.estado}
            </p>
        `;
    } catch (e) {
        box.innerHTML = "<p>Erro ao carregar dados.</p>";
    }
}

carregarDados();
