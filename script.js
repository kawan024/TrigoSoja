/* =========================
   TEMA CLARO E ESCURO
========================= */

// Pega o botão pelo ID
const botaoTema = document.getElementById("botaoTema");

// Verifica se o botão existe
if (botaoTema) {

    // Quando clicar no botão
    botaoTema.addEventListener("click", function () {

        // Adiciona ou remove o tema escuro
        document.body.classList.toggle("tema-escuro");

        // Verifica qual tema está ativo
        if (document.body.classList.contains("tema-escuro")) {

            // Tema escuro
            botaoTema.textContent = "☀️ Tema claro";

        } else {

            // Tema claro
            botaoTema.textContent = "🌙 Tema escuro";
        }
    });
}
