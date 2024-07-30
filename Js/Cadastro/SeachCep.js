$(document).ready(() => {
    async function searchCep() {
        const cep = $("#icep").val().replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                toastr.error("Erro: CEP não encontrado. Certifique-se de que o CEP está correto.");
                return;
            }
            const data = await response.json();
            if (data.erro) {
                toastr.error("Erro: CEP não encontrado.");
                return;
            }
            $("#ipais").val("Brasil");
            $("#iestado").val(data.uf);
            $("#icidade").val(data.localidade);
            $("#ibairro").val(data.bairro);
            $("#irua").val(data.logradouro);
            toastr.success("Endereço preenchido com sucesso!");
        } catch (error) {
            toastr.error("Erro ao buscar o CEP. Certifique-se de que o CEP está no padrão xxxxx-xxx, sem utilizar hífen.");
        }
    }

    $("#SeachCep").click(() => {
        searchCep();
    });
});
