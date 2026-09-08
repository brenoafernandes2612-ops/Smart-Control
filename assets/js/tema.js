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