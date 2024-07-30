$(document).ready(() => {
    $("#toggleSenha").click(() => {
        const passwordField = $("#senha");
        const type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);
        $(this).text(type === "password" ? "Mostrar" : "Ocultar");
    });

    $("#toggleConfirmaSenha").click(() => {
        const confirmPasswordField = $("#confirma_senha");
        const type = confirmPasswordField.attr("type") === "password" ? "text" : "password";
        confirmPasswordField.attr("type", type);
        $(this).text(type === "password" ? "Mostrar" : "Ocultar");
    });
});
