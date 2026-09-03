const areaBoasVindas = document.querySelector("#boas-vindas");
const botaoMenu = document.querySelector(".menu-toggle");
const menuNavegacao = document.querySelector("#menu-navegacao");

if (botaoMenu && menuNavegacao) {
    botaoMenu.addEventListener("click", () => {
        const menuAberto = menuNavegacao.classList.toggle("menu-aberto");
        botaoMenu.setAttribute("aria-expanded", String(menuAberto));
        botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
    });
}

if (areaBoasVindas) {

    // Nome e sobrenome
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    // Caso o usuário não digite nada
    if (!nome || nome.trim() === "") {
        nome = "Usuário";
    }

    if (!sobrenome || sobrenome.trim() === "") {
        sobrenome = "";
    }

    const usuario = `${nome} ${sobrenome}`.trim();

    // Dias da semana
    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    // Função para atualizar a saudação
    function atualizarSaudacao() {
        const agora = new Date();
        const diaSemana = dias[agora.getDay()];
        const dia = String(agora.getDate()).padStart(2, "0");
        const mes = String(agora.getMonth() + 1).padStart(2, "0");
        const ano = agora.getFullYear();
        const hora = String(agora.getHours()).padStart(2, "0");
        const minuto = String(agora.getMinutes()).padStart(2, "0");
        const segundo = String(agora.getSeconds()).padStart(2, "0");

        areaBoasVindas.innerHTML = `
            <p>Olá, ${usuario}! Hoje é ${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}</p>
        `;
    }

    atualizarSaudacao();

    // Atualiza a cada 1 segundo
    setInterval(atualizarSaudacao, 1000);
}

// CAMPO BUSCA

const campoBusca = document.querySelector("#campoBusca");

const linhasTabela = document.querySelectorAll(".relatorio_card tbody tr");

if (campoBusca) {

    campoBusca.addEventListener("input", function () {

        const textoBusca = campoBusca.value.toLowerCase();

        linhasTabela.forEach(function (linha) {

            const nome = linha.children[0].textContent.toLowerCase();

            if (nome.includes(textoBusca)) {

                linha.classList.remove("linha-escondida");

            } else {

                linha.classList.add("linha-escondida");

            }

        });

    });

}

// MODO ESCURO

const botaoTema = document.querySelector("#botaoTema");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            botaoTema.innerHTML = `
                <i class="fa-light fa-sun"></i>
                Light Mode
            `;

        } else {

            botaoTema.innerHTML = `
                <i class="fa-light fa-moon"></i>
                Dark Mode
            `;

        }

    });

}