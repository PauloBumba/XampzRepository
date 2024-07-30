
$(document).ready(function () {

    $("#Send").on('submit', function (event) {
        event.preventDefault();

        var nome = $("#iname").val();
        var email = $("#Iemail").val();
        var password = $("#senha").val();
        var confirmPassword = $("#confirma_senha").val();
        var cep = $("#cep").val(); // Adicionada definição para cep
        var phone = $("#Inumber").val();
        var cpf = $("#icpf").val();

        // Validações
        if (!validateNome(nome)) return;
        if (!validateEmail(email)) return;
        if (!validatePassword(password)) return;
        if (!validateConfirmPassword(password, confirmPassword)) return;
        if (!validatePhone(phone)) return;
        if (!validateCPF(cpf)) return;

        // Se todas as validações passarem, exibir uma caixa de diálogo SweetAlert2
        Swal.fire({
            title: 'Confirmação',
            text: 'Deseja realmente enviar o formulário?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                toastr.success('Formulário enviado com sucesso!');
                // Aqui você pode enviar o formulário, por exemplo, usando AJAX ou similar
                // this.submit(); // Descomente se desejar enviar o formulário tradicionalmente
            }
        });
    });

    function validateNome(nome) {
        if (nome.trim() === '') {
            toastr.error('Por favor, insira seu nome.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            toastr.error('Por favor, insira um email válido.');
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        const re = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
        if (!re.test(password)) {
            toastr.error('A senha deve ter pelo menos 6 caracteres, incluindo um caractere especial.');
            return false;
        }
        return true;
    }

    function validateConfirmPassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Erro',
                text: 'As senhas não coincidem.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        }
        return true;
    }

    function validatePhone(phone) {
        const re = /^\(\d{2}\) \d{4,5}-\d{4}$/; // Aceita formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
        if (!re.test(phone)) {
            toastr.error('Por favor, insira um telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.');
            return false;
        }
        return true;
    }

    function validateCPF(cpf) {
        // Remove qualquer formatação (pontos e hífen)
        cpf = cpf.replace(/[^\d]+/g, '');
        
        // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            toastr.error('Por favor, insira um CPF válido.');
            return false;
        }

        // Validação do primeiro dígito verificador
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(9))) {
            toastr.error('Por favor, insira um CPF válido.');
            return false;
        }

        // Validação do segundo dígito verificador
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(10))) {
            toastr.error('Por favor, insira um CPF válido.');
            return false;
        }

        return true;
    }
});
