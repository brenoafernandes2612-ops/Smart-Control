// MODO ESCURO
const botaoTema = document.querySelector("#botaoTema");

// Aplica o tema ("dark" ou "light") na página
function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add("dark-theme");

        if (botaoTema) {
            botaoTema.setAttribute("aria-pressed", "true");
            botaoTema.textContent = "Light Mode";
        }
    } else {
        document.body.classList.remove("dark-theme");

        if (botaoTema) {
            botaoTema.setAttribute("aria-pressed", "false");
            botaoTema.textContent = "Dark Mode";
        }
    }
}

// Carrega o tema salvo ou usa a preferência do sistema
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
    aplicarTema(temaSalvo);
} else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    aplicarTema("dark");
} else {
    aplicarTema("light");
}

// Alterna o tema ao clicar no botão e salva a preferência
if (botaoTema) {
    botaoTema.addEventListener("click", () => {
        const novoTema = document.body.classList.contains("dark-theme")
            ? "light"
            : "dark";

        aplicarTema(novoTema);
        localStorage.setItem("tema", novoTema);
    });
}
