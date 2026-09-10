const areaBoasVindas = document.querySelector("#boas-vindas");
const botaoMenu = document.querySelector(".menu-toggle");
const menuNavegacao = document.querySelector("#menu-navegacao");


// MENU

if (botaoMenu && menuNavegacao) {

    botaoMenu.addEventListener("click", () => {

        const menuAberto = menuNavegacao.classList.toggle("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", String(menuAberto));

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });

}


// ÁREA DE BOAS-VINDAS

if (areaBoasVindas) {

    // Verifica se o nome já está salvo
    let nome = localStorage.getItem("nome");
    let sobrenome = localStorage.getItem("sobrenome");


    // Se não existir nome salvo, pergunta ao usuário
    if (!nome) {

        nome = prompt("Digite seu nome:");

        if (!nome || nome.trim() === "") {
            nome = "Usuário";
        }

        localStorage.setItem("nome", nome);
    }


    // Se não existir sobrenome salvo, pergunta ao usuário
    if (sobrenome === null) {

        sobrenome = prompt("Digite seu sobrenome:");

        if (!sobrenome || sobrenome.trim() === "") {
            sobrenome = "";
        }

        localStorage.setItem("sobrenome", sobrenome);
    }


    // Monta o nome completo
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


    // Atualiza a saudação
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
            <p>
                Olá, ${usuario}! Hoje é ${diaSemana},
                ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}
            </p>
        `;
    }


    // Mostra imediatamente
    atualizarSaudacao();


    // Atualiza o relógio a cada segundo
    setInterval(atualizarSaudacao, 1000);

}


// CAMPO DE BUSCA

const campoBusca = document.querySelector("#campoBusca");

const linhasTabela = document.querySelectorAll(
    ".relatorio_card tbody tr"
);


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