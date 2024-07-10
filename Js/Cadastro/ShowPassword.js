$(document).ready(function () {
    $('#toggleSenha').on('click', function () {
        var $senhaInput = $('#senha');
        var type = $senhaInput.attr('type') === 'password' ? 'text' : 'password';
        $senhaInput.attr('type', type);
        $(this).text(type === 'password' ? 'Mostrar' : 'Ocultar');
    });

    $('#toggleConfirmaSenha').on('click', function () {
        var $confirmaSenhaInput = $('#confirma_senha');
        var type = $confirmaSenhaInput.attr('type') === 'password' ? 'text' : 'password';
        $confirmaSenhaInput.attr('type', type);
        $(this).text(type === 'password' ? 'Mostrar' : 'Ocultar');
    });
})